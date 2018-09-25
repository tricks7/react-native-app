const listData = [{
  id: 1,
  //brand: 'Citizen',
  title: 'Carrots',
  //subtitle: 'Limited Edition',
  price: 'Wanted',
  badge: 'NEW',
  badgeColor: '#3cd39f',
  image: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/09/2048x1364/gallery-1519672422-carrots.jpg?resize=480:*',
}, {
  id: 2,
  //brand: 'Weeknight',
  title: 'Beets',
  //subtitle: 'Office, prom or special parties is all dressed up',
  price: 'Offering',
  priceFrom: true,
  image: 'http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw37c307da/images/products/vegetables/0125_01_redace.jpg?sw=387&cx=302&cy=0&cw=1196&ch=1196',
}, {
  id: 3,
  //brand: 'Mad Perry',
  title: 'Apples',
  //subtitle: 'Office, prom or special parties is all dressed up',
  price: 'Offering',
  priceFrom: true,
  badge: 'SALE',
  badgeColor: '#ee1f78',
  image: 'http://usapple.org/wp-content/uploads/2016/01/home_fav13-400x350.jpg',
}, {
  id: 4,
  //brand: 'Citizen',
  title: 'Tomatoes',
  //subtitle: 'Limited Edition',
  price: 'Offering',
  badge: 'NEW',
  badgeColor: 'green',
  image: 'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/02/health-benefits-of-tomatoes-main-image-700-350.jpg',
}, {
  id: 5,
  //brand: 'Eggs',
  title: 'Eggs',
  //subtitle: 'Office, prom or special parties is all dressed up',
  price: 'Offering',
  priceFrom: true,
  image: 'https://nomnompaleo.com/wp-content/uploads/2018/01/800InstantPotLazyDevilsPCEggs11.jpg',
}, {
  id: 6,
  //brand: 'Mad Perry',
  title: 'Cauliflower',
  //subtitle: 'Office, prom or special parties is all dressed up',
  price: 'Offering',
  priceFrom: true,
  badge: 'SALE',
  badgeColor: 'red',
  image: 'http://www.healthygreenkitchen.com/wp-content/uploads/2011/03/cauliflower-head1.jpg',
},
  {
    id: 7,
    //brand: 'Citizen',
    title: 'Kale',
    //subtitle: 'Limited Edition',
    price: 'Wanted',
    badge: 'NEW',
    badgeColor: '#3cd39f',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/kale-serving-per-week-1514986453.jpg?resize=480:*',
  }, {
    id: 8,
    //brand: 'Weeknight',
    title: 'Corn',
    //subtitle: 'Office, prom or special parties is all dressed up',
    price: 'Wanted',
    priceFrom: true,
    image: 'https://www.organicfacts.net/wp-content/uploads/corn.jpg',
  }, {
    id: 9,
    //brand: 'Mad Perry',
    title: 'Rosemary',
    //subtitle: 'Office, prom or special parties is all dressed up',
    price: 'Wanted',
    priceFrom: true,
    badge: 'SALE',
    badgeColor: '#ee1f78',
    image: 'http://extension.illinois.edu/herbs/images/herbs/rosemary.jpg',
  }, {
    id: 10,
    //brand: 'Citizen',
    title: 'Sage',
    //subtitle: 'Limited Edition',
    price: 'Wanted',
    badge: 'NEW',
    badgeColor: 'green',
    image: 'https://www.jesmondfruitbarn.com.au/wp-content/uploads/2016/10/Jesmond-Fruit-Barn-Styled-Sage.jpg',
  }, {
    id: 11,
    //brand: 'Weeknight',
    title: 'Grapefruit',
    //subtitle: 'Office, prom or special parties is all dressed up',
    price: 'Wanted',
    priceFrom: true,
    image: 'https://img.aws.livestrongcdn.com/ls-article-image-673/ds-photo/getty/article/228/239/170548610.jpg',
  }, {
    id: 12,
    //brand: 'Mad Perry',
    title: 'Onions',
    //subtitle: 'Office, prom or special parties is all dressed up',
    price: 'Wanted',
    priceFrom: true,
    badge: 'SALE',
    badgeColor: 'red',
    image: 'https://spiderimg.amarujala.com/assets/images/2018/05/11/750x506/onion_1526040305.jpeg',
  }];

// Initial state
const initialState = {
  tabIndex: 0,
  tabs: ['Grid', 'List 1', 'List 2'],
  loading: false,
  data: [],
};

// Actions
const SWITCH_TAB = 'GridState/SWITCH_TAB';
const START_DATA_LOADING = 'GridState/START_DATA_LOADING';
const DATA_LOADED = 'GridState/DATA_LOADED';

// Action creators
function switchGridTab(index) {
  return {
    type: SWITCH_TAB,
    payload: index,
  };
}

function startDataLoading() {
  return {
    type: START_DATA_LOADING,
  };
}

function dataLoaded(data) {
  return {
    type: DATA_LOADED,
    data,
  };
}

export function switchTab(index) {
  return (dispatch) => {
    dispatch(switchGridTab(index));
  };
}

export function loadData() {
  return (dispatch) => {
    dispatch(startDataLoading());
    dispatch(dataLoaded(listData));
  };
}


// Reducer
export default function GridStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SWITCH_TAB:
      return Object.assign({}, state, {
        tabIndex: action.payload,
      });
    case START_DATA_LOADING:
      return Object.assign({}, state, {
        loading: true,
      });
    case DATA_LOADED:
      return Object.assign({}, state, {
        loading: false,
        data: action.data,
      });
    default:
      return state;
  }
}
