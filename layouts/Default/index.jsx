//Next, React (core node_modules) imports must be placed here

//import STORE from '@/store'

//import VIEWS from '@/views'

//import useFETCHER from '@/tools'

//import COMPOSITES from '@/composites'

//import COMPONENT from '@/components'

import styles from "./Default.module.scss";

const DefaultLayout = ({ children, ...props }) => {
  return (
    <div className={styles.container}>

      {children}
    </div>
  );
};

export default DefaultLayout;
