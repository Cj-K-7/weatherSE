import React, { useState } from "react";
import { useRouter } from "next/router";
import { HomeBtn } from "./SVGs";


function Header() {
  const [city, setCity] = useState<string>();
  const router = useRouter();
  
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCity(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/search/${city}`);
  };

  return (
    <div className="headerBox">
      <h1 className="homeTitle">City Weathers</h1>
      <form className="form" onSubmit={onSubmit} autoComplete="off">
        {router.pathname === '/' ? null: <><HomeBtn/></> }
        <input onChange={onChange} type="text" placeholder="City Name" />
        <input type="submit" value="Search" />
      </form>
      <style jsx>{`
        .headerBox {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          width: 100%;
        }
        .homeTitle {
          font-size: 50px;
          font-weight: 600;
          text-transform: uppercase;
          padding: 20px 0px;
        }
        .form {
          position: relative;
          display: flex;
          align-items: flex-end;
        }
        .autocom{
          width : 100%;
          position : absolute;
          top : 40px;
          background-color:white;
          color : black;
          padding : 10px;
        }
        @media (max-width: 1200px) {
          .headerBox {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}

export default Header;
