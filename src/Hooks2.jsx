import React, { useState } from "react";

const CompanyInfo = () => {
  const [info, setInfo] = useState({
    name: "",
    companyName: "",
    companyAddr: "",
    email: "",
    phone: "",
  });

  const [infoList, setInfoList] = useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const onClick = () => {
    clearList();
    setInfoList((prevInfoList) => [...prevInfoList, info]);
    setInfo({
      name: "",
      companyName: "",
      companyAddr: "",
      email: "",
      phone: "",
    });
  };
  const clearList = () => setInfoList([]);

  return (
    <div>
      <input
        type="text"
        name="name"
        value={info.name}
        onChange={onChange}
        placeholder="Name"
      />
      <br />
      <input
        type="text"
        name="companyName"
        value={info.companyName}
        onChange={onChange}
        placeholder="Company Name"
      />
      <br />
      <input
        type="text"
        name="companyAddr"
        value={info.companyAddr}
        onChange={onChange}
        placeholder="Company Address"
      />
      <br />
      <input
        type="text"
        name="email"
        value={info.email}
        onChange={onChange}
        placeholder="Email"
      />
      <br />
      <input
        type="text"
        name="phone"
        value={info.phone}
        onChange={onChange}
        placeholder="Phone"
      />
      <br />
      <button onClick={onClick}>Submit</button>
      <ul>
        {infoList.map((item, index) => (
          <li key={index}>
            <b>Name:</b> {item.name}
            <br />
            <b>Company:</b> {item.companyName}
            <br />
            <b>Address:</b> {item.companyAddr}
            <br />
            <b> Email:</b> {item.email}
            <br />
            <b>Phone:</b> {item.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyInfo;
