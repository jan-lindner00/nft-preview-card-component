import type { JSX } from "react/jsx-runtime";
import { useState } from "react";
import Equilibrium from "./assets/image-equilibrium.jpg";
import IconEthereum from "./assets/icon-ethereum.svg";
import IconClock from "./assets/icon-clock.svg";
import IconView from "./assets/icon-view.svg";
import Avatar from "./assets/image-avatar.png";

export default function App(): JSX.Element{
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return(
    <main className="l-container l-container--items-center h-full">
      <article className="c-card">
        <a
          className="c-card__link" 
          href="#" 
          aria-label="See details of Equilibrium #3429."
          onMouseEnter={()=>setIsHovered(true)}
          onMouseLeave={()=>setIsHovered(false)}
        ></a>
        <section className="c-card__imagecontainer">
          <img 
            src={Equilibrium} 
            alt="A cube with a red-to-blue gradient, resting on one of its corners on a reflective surface"
            className="c-card__image" 
          />
          <div className={`c-card__transparentbg 
            ${!isHovered ? "h-hidden": ""}
          `}
            aria-hidden="true"
          >
          </div>
          <img 
            src={IconView}
            alt=""
            className={`c-card__viewicon
              ${!isHovered ? "h-hidden": ""}
            `}
            aria-hidden="true"
          />
        </section>
        <section>
          <h2 className="c-card__title h-textpreset1">Equilibrium #3429</h2>
          <h3 className="c-card__description h-textpreset2">
            Our Equilibrium collection promotes balance and calm.
          </h3>
        </section>
        <section className="l-container .l-container--align-center c-card__pricecontainer">
          <div className="l-container l-container--align-center">
            <img 
              src={IconEthereum}  
              alt="The ethereum logo."
              className="c-card__icon" 
            />
            <h4 className="c-card__price h-textpreset3">0.041 ETH</h4>
          </div>
          <div className="l-container l-container--align-center">
            <img
              src={IconClock}
              alt="Clock icon." 
              className="c-card__icon"
            />
            <h4 className="c-card__timeleft h-textpreset4">3 days left</h4>
          </div>
        </section>
        <hr className="c-card__hr"/>
        <section className="l-container l-container--align-center c-card__avatarcontainer">
          <img
            src={Avatar}
            alt="The creator of this NFT Jules Wyvern."
            className="c-card__avatar"
          />
          <small className="c-card__credentials h-textpreset4">
              Creation of&nbsp;<span className="c-card__creator">Jules Wyvern</span>
          </small>
        </section>
      </article>
    </main>
  );
} 