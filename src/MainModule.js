import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import "./Display.css";

function MainModule({ SearchData, Input }) {
  const dispatch = useDispatch();

  const resturant = useSelector((state) => state.Resturant);
  const MainData = useSelector((state) => state.MainData);
  const Category = useSelector((state) => state.Category);

  const filteredProducts = resturant?.filter((product) => {
    if (product.name.toLowerCase().includes(SearchData)) {
      return product;
    }
  });
  useEffect(() => {
    CategoryFillter();
  }, [Input]);
  const CategoryFillter = () => {
    let data = [];
    Input.map((res, id) => {
      Category.map((res1, id1) => {
        if (res1.name === res) {
          data = [...data, ...res1.restaurants];
        }
      });
    });
    dispatch({ type: "MAIN_DATA", item: data });
  };

  return (
    <div className="container">
      <h1>restaurants</h1>
      <div className="Main">
        {!MainData?.length > 0
          ? filteredProducts.map((data, i) => (
              <div key={i} className="">
                <Card style={{ width: "20rem" }}>
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.address}</Card.Text>
                    <Card.Text>{data.mobile}</Card.Text>
                    <Card.Text>{data.description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          : MainData.map((res, id) => (
              <div key={id}>
                <Card style={{ width: "20rem" }}>
                  <Card.Body>
                    <Card.Title>{res.name}</Card.Title>
                    <Card.Text>{res.address}</Card.Text>
                    <Card.Text>{res.mobile}</Card.Text>
                    <Card.Text>{res.description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
      </div>
    </div>
  );
}

export default MainModule;
