import { DrawerNavigator } from 'react-navigation';

import CheckoutScreen from '../screens/CheckOut/CheckoutScreen';
import AddInventoryScreen from '../screens/AddInventory/AddInventoryScreen';
import SideMenu from '../screens/HomeDrawer/HomeDrawer';

// export default DrawerNavigator(
//     Checkout: { screen: Screen1 },
//     screen2: { screen: Screen2 },
//     screen3: { screen: Screen3 }, {
//         contentComponent: SideMenu,
//         drawerWidth: 300
//     }
// );

const mainNavigator = DrawerNavigator({
  Checkout: {
    screen: CheckoutScreen,
    // navigationOptions: {
    //   header: {
    //     title: 'TITLE',
    //     titleStyle: {
    //       color: 'black',
    //       textAlign: 'center',
    //       fontWeight: '500'
    //     }
    //   }
    // }
  },
  AddInventory: {
    screen: AddInventoryScreen,
  }
}, {
    contentComponent: SideMenu,
  });


export default mainNavigator;
