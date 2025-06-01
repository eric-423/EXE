export enum AuthAction {
  INITIALIZE = 'INITIALIZE',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
  PATCH_USER = 'PATCH_USER',
}

export enum CartAction {
  INITIALIZE = 'INITIALIZE',
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  CLEAR_CART = 'CLEAR_CART',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
  SET_LOADING = 'SET_LOADING',
}

export enum Role {
  ADMIN = 'ADMIN',
  GUEST = 'GUEST',
  USER = 'CUSTOMER',
}

export enum OrderStatus {
  'PROCESSING' = 'Chờ Thanh Toán',
  'COMPLETED' = 'Đặt Hàng Thành Công',
  'CANCELLED' = 'Đã Hủy',
  'PAID' = 'Đã Thanh Toán',
}
