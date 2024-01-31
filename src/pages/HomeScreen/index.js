import React, { useEffect, useState, useCallback } from "react";
import ReactTooltip from "react-tooltip";
import api from "../../api";
import CategoryItem from "../../components/Category/CategoryItem";
import Header from "../../components/Header";
import {
  CategoryArea,
  CategoryList,
  Container,
  ProductArea,
  ProductList,
  ProductPaginationArea,
  ProductPaginationItem,
} from "./styled";
import ProductItem from "../../components/ProductItem";
import Modal from "../../components/Modal";
import ModalProduct from "../../components/ModalProduct";

import foodImage from "../../assets/food-and-restaurant.png";

let searchTimer = null;

export default () => {
  const [headerSearch, setHeaderSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const [activeCategory, setActiveCategory] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [activeSearch, setActiveSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const cat = await api.getCategories();
      if (cat.error === "") setCategories(cat.result);
    };

    getCategories();
    ReactTooltip.rebuild();
  }, []);

  useEffect(() => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      setActiveSearch(headerSearch.trim());
    }, 1500);
  }, [headerSearch]);

  const getProducts = useCallback(async () => {
    const prods = await api.getProducts(
      activeCategory,
      activePage,
      activeSearch
    );
    if (prods.error === "") {
      setProducts(prods.result.data);
      setTotalPages(prods.result.pages);
      setActivePage(prods.result.page);
    }
  }, [activeCategory, activePage, activeSearch]);

  useEffect(() => {
    setProducts([]);
    getProducts();
  }, [activeCategory, activePage, activeSearch, getProducts]);

  const handleClick = (id) => {
    setActiveCategory(id);
  };

  const handleProductClick = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  return (
    <Container>
      <Header search={headerSearch} onSearch={setHeaderSearch} />

      {categories.length > 0 && (
        <CategoryArea>
          Select a Category
          <CategoryList>
            <CategoryItem
              title="All"
              id={0}
              handleOnClick={(id) => handleClick(id)}
              img={foodImage}
              isActive={activeCategory === 0}
            />
            {categories.map((cat, index) => (
              <CategoryItem
                key={index}
                id={cat.id}
                title={cat.name}
                img={cat.image}
                handleOnClick={(id) => handleClick(id)}
                isActive={activeCategory === cat.id}
              />
            ))}
          </CategoryList>
        </CategoryArea>
      )}

      {products.length > 0 && (
        <ProductArea>
          <ProductList>
            {products.map((product, index) => (
              <ProductItem
                key={index}
                data={product}
                onClick={handleProductClick}
              />
            ))}
          </ProductList>
        </ProductArea>
      )}

      {totalPages > 0 && (
        <ProductPaginationArea>
          {Array(totalPages)
            .fill(0)
            .map((value, index) => (
              <ProductPaginationItem
                key={index}
                active={activePage === index + 1}
                onClick={() => setActivePage(index + 1)}
              >
                {index + 1}
              </ProductPaginationItem>
            ))}
        </ProductPaginationArea>
      )}

      <Modal status={showModal} setStatus={setShowModal}>
        <ModalProduct data={modalData} setStatus={setShowModal} />
      </Modal>
    </Container>
  );
};
