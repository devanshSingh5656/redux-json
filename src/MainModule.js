import React, { useEffect} from "react";
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
    let data1;
    
    Input.map((res, id) => {
      Category.map((res1, id1) => {
        if (res1.name === res) {
          data = [...data, ...res1.restaurants];
          console.log(data);
          }
      });
    });
    data1=[...new Map(data.map(item=>{
      return [item.id,item]
    })).values()]
  
    
    dispatch({ type: "MAIN_DATA", item: data1 });
  };

  return (
    <div className="container">
      <h1>restaurants</h1>
      <div className="Main">
        {!MainData?.length > 0
          ? filteredProducts.map((data, i) => (
              <div key={i} className="">
                <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src='https://hyperlocal.cartlabs.com/storage/app/public/210/banner6.jpg' />

                
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
                <Card.Img variant="top" src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHJlc3RhdXJhbnR8ZW58MHx8MHw%3D&w=1000&q=80' />

                  <Card.Body>
                    <Card.Title>{res.name}</Card.Title>
                    <Card.Text>Shop No. 410, Sector 45, Opp Ramada Hotel, Gurugram, Haryana 122003</Card.Text>
                    <Card.Text>7727993650</Card.Text>
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
