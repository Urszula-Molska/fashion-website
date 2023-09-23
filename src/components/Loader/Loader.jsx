import { ColorRing } from "react-loader-spinner";

import css from "./Loader.module.css";

const Loader = () => (
  <div className={css.loaderCont}>
    <ColorRing
      className={css.loader}
      visible={true}
      height="100"
      width="100"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#10FF70", "#10FF70", "#10FF70", "#10FF70", "#10FF70"]}
    />
  </div>
);
export default Loader;
