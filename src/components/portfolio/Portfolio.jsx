import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webappPortfolio,
  mobilePortfolio,
  designingPortfolio,
} from "../../data.js";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Whatever.Watch",
    },
    {
      id: "webapp",
      title: "ScareBnB",
    },
    {
      id: "mobile",
      title: "Pokedex",
    },
    {
      id: "designing",
      title: "IPSO Email bot",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "webapp":
        setData(webappPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "designing":
        setData(designingPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <div className="topContainer">
        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
      </div>

      <div className="container">
        {data.map((d) => (
          <div className="item">
            <div className="appmedia">
              <a className="applink" href={d.appLink}>
                <img src={d.img} alt="" />
              </a>
            </div>

            <div className="paragraph">
              <p>{d.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
