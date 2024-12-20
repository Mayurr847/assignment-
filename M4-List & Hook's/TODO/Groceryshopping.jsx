import React, { useState, useEffect } from "react";

const Groceryshopping = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const addlist = () => {
    if (name) {
      setData([...data, name]);
      setName(""); 
    }
  };

  const deleteItemByName = (itemName) => {
    const newData = data.filter((item) => item !== itemName);
    setData(newData);
  };

  
  const editItem = (index) => {
    const newName = prompt("Edit item", data[index]);
    if (newName !== null) {
      const newData = [...data];
      newData[index] = newName;
      setData(newData);
    }
  };



  return (
    <div
      style={{
        backgroundColor: "blue",
        padding: 30,
        borderRadius: 20,
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(28, 19, 70, 0.8)",
          color: "white",
          padding: 30,
          borderRadius: 20,
        }}
      >
        <p style={{ fontSize: 30 }}>Grocery Shopping</p>

        <div className="listdiv">
          {data.map((i, index) => (
            <div key={index} style={{ marginBottom: 10 }}>
              <input
                type="text"
                value={i}
                disabled
                style={{
                  height: 30,
                  padding: 5,
                  marginRight: 10,
                }}
              />
              <button
                onClick={() => deleteItemByName(i)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  marginRight: 5,
                  border: "none",
                  padding: 5,
                }}
              >
                Delete
              </button>
              <button
                onClick={() => editItem(index)}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  padding: 5,
                }}
              >
                Edit
              </button>
            </div>
          ))}
        </div>

        <br />
        <div
          style={{
            backgroundColor: "rgba(77, 75, 130, 0.8)",
            padding: 4,
            width: 250,
          }}
        >
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Add something to your list"
            style={{
              height: 40,
              border: "none",
              padding: 2,
            }}
            value={name}
          />
          <button
            type="button"
            onClick={addlist}
            style={{
              height: 40,
              border: "none",
              backgroundColor: "rgba(77, 75, 130, 0.8)",
            }}
          >
            Add
          </button>
        </div>

        <br />
        <button
          type="button"
          onClick={() => setData([])}
          style={{
            backgroundColor: "orange",
            color: "white",
            border: "none",
            padding: 10,
          }}
        >
          Delete List
        </button>
      </div>
    </div>
  );
};

export default Groceryshopping;
