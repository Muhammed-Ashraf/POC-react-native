import { DrawerNavigator, StackNavigator } from 'react-navigation';

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

const checkoutNavigator = StackNavigator({
  Checkout: {
    screen: CheckoutScreen,
  },
},
  {
    initialRouteName: 'Checkout'
  }
);

const AddInventoryNavigator = StackNavigator({
  AddInventory: {
    screen: AddInventoryScreen,
  },
},
  {
    initialRouteName: 'AddInventory'
  }
);

const mainNavigator = DrawerNavigator({
  Checkout: {
    screen: checkoutNavigator,
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
    screen: AddInventoryNavigator,
  }
}, {
    contentComponent: SideMenu,
  });


export default mainNavigator;
