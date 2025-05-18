import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ items, cart, setCart }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeChatProduct, setActiveChatProduct] = useState(null);

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = { id, price, title, description, imgSrc };
    setCart([...cart, obj]);
    toast.success("Item added to cart", {
      position: "top-right",
      autoClose: 1500,
      theme: "dark",
    });
  };

  const toggleChat = (product) => {
    if (isChatOpen && activeChatProduct?.id === product.id) {
      setIsChatOpen(false);
      setActiveChatProduct(null);
    } else {
      setIsChatOpen(true);
      setActiveChatProduct(product);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} theme="dark" />

      <div className="container my-5">
        <div className="row">
          {items.map((product) => (
            <div
              key={product.id}
              className="col-lg-4 col-md-6 col-sm-12 my-3 d-flex"
            >
              <div
                className="card h-100 d-flex flex-column justify-content-between"
                style={{ width: "100%", minHeight: "450px" }}
              >
                <Link
                  to={`/product/${product.id}`}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Link>

                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      marginTop: "auto",
                    }}
                  >
                    <button className="btn btn-primary">
                      ₹ {product.price}
                    </button>

                    <button
                      onClick={() =>
                        addToCart(
                          product.id,
                          product.price,
                          product.title,
                          product.description,
                          product.imgSrc
                        )
                      }
                      className="btn btn-warning"
                    >
                      Add To Cart
                    </button>

                    <button
                      onClick={() => toggleChat(product)}
                      className={`btn ${
                        isChatOpen && activeChatProduct?.id === product.id
                          ? "btn-success"
                          : "btn-danger"
                      }`}
                    >
                      {isChatOpen && activeChatProduct?.id === product.id
                        ? "Close Chat"
                        : "Chat"}
                    </button>
                  </div>

                  {isChatOpen && activeChatProduct?.id === product.id && (
                    <div
                      style={{
                        marginTop: "10px",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        backgroundColor: "#f9f9f9",
                      }}
                    >
                      <p>
                        Chat with <b>{product.title}</b> support here.
                      </p>
                      <textarea
                        rows={3}
                        placeholder="Type your message..."
                        style={{ width: "100%", resize: "none" }}
                      />
                      <button
                        style={{ marginTop: "5px" }}
                        className="btn btn-primary btn-sm"
                        onClick={() => alert("Message sent!")}
                      >
                        Send
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
