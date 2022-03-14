//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

//import VIEWS from '@/views'

//import useFETCHER from '@/tools'

//import COMPOSITES from '@/composites'
//import COMPONENT from '@/components'

import Dropdown from "@/components/Dropdown";
import styles from "./ComponentShowcase.module.scss";

const ComponentShowcaseLayout = ({ children, ...props }) => {
  return (
    <div className={styles.container}>

      <Dropdown/>
    </div>
  );
};

export default ComponentShowcaseLayout;
