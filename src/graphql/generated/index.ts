import type { GraphQLClient } from 'graphql-request';
import type { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, useQuery, type UseMutationOptions, type UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    //@ts-ignore
	 document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddToCartInput = {
  productId: Scalars['String'];
  quantity: Scalars['Float'];
};

export type AdminInputDto = {
  password: Scalars['String'];
  userName: Scalars['String'];
};

export type AdminLoginResponse = {
  __typename?: 'AdminLoginResponse';
  expiresAt: Scalars['String'];
  payload: AdminPayload;
  refreshToken: Scalars['String'];
  refreshTokenExpiresAt: Scalars['String'];
  token: Scalars['String'];
};

export type AdminPayload = {
  __typename?: 'AdminPayload';
  _id?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type BooleanPayload = {
  __typename?: 'BooleanPayload';
  success?: Maybe<Scalars['Boolean']>;
};

export type CartType = {
  __typename?: 'CartType';
  _id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Boolean']>;
  userId?: Maybe<Scalars['String']>;
};

export type ChangePassWhenLoginInput = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type ChangePassWhenLoginType = {
  __typename?: 'ChangePassWhenLoginType';
  changed: Scalars['Boolean'];
};

export type ChangePasswordInputDto = {
  confirmPassword: Scalars['String'];
  otp: Scalars['String'];
  password: Scalars['String'];
  sessionId: Scalars['String'];
};

export type ChangePasswordResponse = {
  __typename?: 'ChangePasswordResponse';
  updated: Scalars['Boolean'];
};

export type CommentResponse = {
  __typename?: 'CommentResponse';
  _id: Scalars['String'];
  countFeedback?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Float']>;
  message: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Float']>;
  user?: Maybe<UserDtoType>;
};

export type ConfirmOrderInput = {
  orderId: Scalars['String'];
};

export type ConfirmOtpRequestInput = {
  otp: Scalars['String'];
  sessionId: Scalars['String'];
};

export type ConfirmOtpResponse = {
  __typename?: 'ConfirmOtpResponse';
  confirmed?: Maybe<Scalars['Boolean']>;
};

export type ConversationDtoType = {
  __typename?: 'ConversationDtoType';
  _id: Scalars['String'];
  createdAt?: Maybe<Scalars['Float']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['Float']>;
  deletedBy?: Maybe<Scalars['String']>;
  members?: Maybe<Array<Maybe<UserDtoType>>>;
  name: Scalars['String'];
  ownerId?: Maybe<Scalars['String']>;
  type: ConversationType;
  updatedAt?: Maybe<Scalars['Float']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export enum ConversationType {
  Group = 'GROUP',
  Personal = 'PERSONAL'
}

export type CreateCommentInput = {
  message: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
  productId: Scalars['String'];
};

export type CreateConversationInput = {
  name: Scalars['String'];
  type: ConversationType;
};

export type CreateConversationType = {
  __typename?: 'CreateConversationType';
  conversation: ConversationDtoType;
};

export type CreatePaymentInputDto = {
  code: Scalars['String'];
  couponCode?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  items: Array<OrderItem>;
  paymentMethod: PaymentMethod;
  paymentProvider?: InputMaybe<PaymentProvider>;
  paymentType?: InputMaybe<PaymentType>;
  shippingAddress: Scalars['String'];
};

export type CreatePaymentResponse = {
  __typename?: 'CreatePaymentResponse';
  redirectUrl?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateProductInputDto = {
  compatibility?: InputMaybe<Scalars['String']>;
  connectivity?: InputMaybe<Scalars['String']>;
  countInStock: Scalars['Float'];
  description: Scalars['String'];
  dimensions?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  modelNumber?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  powerSource?: InputMaybe<Scalars['String']>;
  price: Scalars['Float'];
  type: Scalars['String'];
  warranty?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['String']>;
};

export type DeleteTypeInput = {
  typeId: Scalars['String'];
};

export type FavoriteProductInput = {
  productId: Scalars['String'];
};

export type FilterProductInput = {
  price_gte?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  type_eq?: InputMaybe<Scalars['String']>;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'Unknown'
}

export type GetIdAdminResponse = {
  __typename?: 'GetIdAdminResponse';
  id: Scalars['String'];
};

export type GetListProductInput = {
  filter?: InputMaybe<FilterProductInput>;
  pagination: PaginationBaseInput;
  query?: InputMaybe<Scalars['String']>;
};

export type GetListProductResponse = {
  __typename?: 'GetListProductResponse';
  pagination?: Maybe<PaginationResponse>;
  products?: Maybe<Array<ProductPayload>>;
  totalItem?: Maybe<Scalars['Float']>;
};

export type GetListTypeResponse = {
  __typename?: 'GetListTypeResponse';
  data?: Maybe<Array<ProductType>>;
};

export type GetProductResponse = {
  __typename?: 'GetProductResponse';
  product?: Maybe<ProductPayload>;
};

export type IsFavoriteProductInput = {
  productId: Scalars['String'];
};

export type ListCartType = {
  __typename?: 'ListCartType';
  cart?: Maybe<Array<CartType>>;
};

export type ListCommentInput = {
  id: Scalars['String'];
};

export type ListCommentResponse = {
  __typename?: 'ListCommentResponse';
  data?: Maybe<Array<CommentResponse>>;
};

export type ListConversationInput = {
  userId: Scalars['String'];
};

export type ListConversationResponse = {
  __typename?: 'ListConversationResponse';
  data?: Maybe<Array<ConversationDtoType>>;
};

export type ListFeedbackInput = {
  parentId: Scalars['String'];
};

export type ListMessageInput = {
  conversationId: Scalars['String'];
  pagination: PaginationBaseInput;
};

export type ListMessageResponse = {
  __typename?: 'ListMessageResponse';
  data: Array<MessageDtoType>;
};

export type ListOrderResponse = {
  __typename?: 'ListOrderResponse';
  orders?: Maybe<Array<OrderDto>>;
};

export type ListUserResponse = {
  __typename?: 'ListUserResponse';
  user: Array<UserDtoType>;
};

export type LockOrUnLockUserInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  expiresAt: Scalars['String'];
  payload?: Maybe<UserPayload>;
  refreshToken: Scalars['String'];
  refreshTokenExpiresAt: Scalars['String'];
  token: Scalars['String'];
};

export type LoginSocialInputDto = {
  accessToken: Scalars['String'];
  provider: Provider;
};

export type LoginUserInputDto = {
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type Media = {
  __typename?: 'Media';
  _id?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Float']>;
  fileName?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  status?: Maybe<MediaStatus>;
  url?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export enum MediaStatus {
  Uploaded = 'UPLOADED',
  Uploading = 'UPLOADING'
}

export type MessageDtoType = {
  __typename?: 'MessageDtoType';
  _id: Scalars['String'];
  content: Scalars['String'];
  conversationId: Scalars['String'];
  createdAt?: Maybe<Scalars['Float']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['Float']>;
  deletedBy?: Maybe<Scalars['String']>;
  senderId?: Maybe<UserDtoType>;
  updatedAt?: Maybe<Scalars['Float']>;
  updatedBy?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addToCart: BooleanPayload;
  adminLogin: AdminLoginResponse;
  changePassword: ChangePasswordResponse;
  changePasswordWhenLogin: ChangePassWhenLoginType;
  clearCart: BooleanPayload;
  confirmOrder: BooleanPayload;
  confirmOtp: ConfirmOtpResponse;
  createAdmin: BooleanPayload;
  createComment: CommentResponse;
  createCommentAdmin: CommentResponse;
  createConversation: CreateConversationType;
  createPayment: CreatePaymentResponse;
  createProduct: BooleanPayload;
  createType: BooleanPayload;
  deleteProduct: BooleanPayload;
  deleteType: BooleanPayload;
  favoriteProduct: BooleanPayload;
  inValidOtp: ConfirmOtpResponse;
  lockOrUnLockUser: BooleanPayload;
  loginSocial: LoginResponse;
  loginUser: LoginResponse;
  printOrder: PrintOrderType;
  registerUser: RegisterUserResponse;
  removeFromCart: BooleanPayload;
  sendEmail: SendEmailResponse;
  sendOtp: SendOtpResponse;
  updateAvatarUser: BooleanPayload;
  updateProduct: BooleanPayload;
  updateProfile: UpdateProfileResponse;
  verifyEmail: BooleanPayload;
  verifyPhone: VerifyPhoneResponse;
};


export type MutationAddToCartArgs = {
  input: AddToCartInput;
};


export type MutationAdminLoginArgs = {
  input: AdminInputDto;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInputDto;
};


export type MutationChangePasswordWhenLoginArgs = {
  input: ChangePassWhenLoginInput;
};


export type MutationConfirmOrderArgs = {
  input: ConfirmOrderInput;
};


export type MutationConfirmOtpArgs = {
  input: ConfirmOtpRequestInput;
};


export type MutationCreateAdminArgs = {
  input: AdminInputDto;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateCommentAdminArgs = {
  input: CreateCommentInput;
};


export type MutationCreateConversationArgs = {
  input: CreateConversationInput;
};


export type MutationCreatePaymentArgs = {
  input: CreatePaymentInputDto;
};


export type MutationCreateProductArgs = {
  input: CreateProductInputDto;
};


export type MutationCreateTypeArgs = {
  input: ProductTypeInput;
};


export type MutationDeleteProductArgs = {
  input: ReadProductInputDto;
};


export type MutationDeleteTypeArgs = {
  input: DeleteTypeInput;
};


export type MutationFavoriteProductArgs = {
  input: FavoriteProductInput;
};


export type MutationInValidOtpArgs = {
  input: ConfirmOtpRequestInput;
};


export type MutationLockOrUnLockUserArgs = {
  input: LockOrUnLockUserInput;
};


export type MutationLoginSocialArgs = {
  input: LoginSocialInputDto;
};


export type MutationLoginUserArgs = {
  input: LoginUserInputDto;
};


export type MutationPrintOrderArgs = {
  input: ConfirmOrderInput;
};


export type MutationRegisterUserArgs = {
  input: RegisterUserInputDto;
};


export type MutationRemoveFromCartArgs = {
  input: RemoveFromCartInput;
};


export type MutationSendEmailArgs = {
  input: SendPinCodeInput;
};


export type MutationSendOtpArgs = {
  input: SendOtpRequestInput;
};


export type MutationUpdateAvatarUserArgs = {
  input: UpdateAvatarInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInputDto;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInputDto;
};


export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};


export type MutationVerifyPhoneArgs = {
  input: VerifyPhoneInputDto;
};

export type OrderDto = {
  __typename?: 'OrderDto';
  _id?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  couponCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  discountAmount?: Maybe<Scalars['Float']>;
  items?: Maybe<Array<OrderItemResponse>>;
  paymentMethod?: Maybe<PaymentMethod>;
  shippingAddress?: Maybe<Scalars['String']>;
  shippingStatus?: Maybe<ShippingStatus>;
  status?: Maybe<OrderStatus>;
  subTotal?: Maybe<Scalars['Float']>;
  transaction?: Maybe<OrderTransactionType>;
  userId?: Maybe<UserDtoType>;
};

export type OrderItem = {
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Float'];
};

export type OrderItemResponse = {
  __typename?: 'OrderItemResponse';
  id?: Maybe<ProductPayload>;
  name?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  quantity: Scalars['Float'];
};

export enum OrderStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

export type OrderTransactionType = {
  __typename?: 'OrderTransactionType';
  gateway?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['Float']>;
};

export type PaginationBaseInput = {
  /** Page option: ID */
  after?: InputMaybe<Scalars['ID']>;
  /** Page option */
  limit: Scalars['Int'];
  /** Page option: No pagination */
  noPaginate?: InputMaybe<Scalars['Boolean']>;
  /** Page option */
  page: Scalars['Int'];
};

export type PaginationResponse = {
  __typename?: 'PaginationResponse';
  currentPage?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalPage?: Maybe<Scalars['Int']>;
};

export enum PaymentMethod {
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

export enum PaymentProvider {
  Vnpay = 'VNPAY',
  Zalopay = 'ZALOPAY'
}

export enum PaymentType {
  Atm = 'ATM',
  Cc = 'CC'
}

export type PrintOrderType = {
  __typename?: 'PrintOrderType';
  pdfPath?: Maybe<Scalars['String']>;
};

export type ProductInputDto = {
  compatibility?: InputMaybe<Scalars['String']>;
  connectivity?: InputMaybe<Scalars['String']>;
  countInStock: Scalars['Float'];
  description: Scalars['String'];
  dimensions?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  modelNumber?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  powerSource?: InputMaybe<Scalars['String']>;
  price: Scalars['Float'];
  type: Scalars['String'];
  warranty?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['String']>;
};

export type ProductPayload = {
  __typename?: 'ProductPayload';
  _id?: Maybe<Scalars['String']>;
  compatibility?: Maybe<Scalars['String']>;
  connectivity?: Maybe<Scalars['String']>;
  countInStock?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  dimensions?: Maybe<Scalars['String']>;
  image?: Maybe<Media>;
  manufacturer?: Maybe<Scalars['String']>;
  modelNumber?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  powerSource?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  totalComment?: Maybe<Scalars['Float']>;
  totalLike?: Maybe<Scalars['Float']>;
  totalSold?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Float']>;
  video?: Maybe<Scalars['String']>;
  warranty?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
};

export type ProductType = {
  __typename?: 'ProductType';
  _id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProductTypeInput = {
  name: Scalars['String'];
};

export enum Provider {
  Apple = 'Apple',
  Facebook = 'Facebook',
  Google = 'Google'
}

export type Query = {
  __typename?: 'Query';
  detailOrder: OrderDto;
  getAdmin: AdminPayload;
  getIdAdmin: GetIdAdminResponse;
  getListProduct: GetListProductResponse;
  getMe: UserDtoType;
  getProduct: GetProductResponse;
  isFavoriteProduct: BooleanPayload;
  listCart: ListCartType;
  listComment: ListCommentResponse;
  listConversation?: Maybe<ListConversationResponse>;
  listFeedback: ListCommentResponse;
  listMessage: ListMessageResponse;
  listOrderAdmin: ListOrderResponse;
  listOrderUser: ListOrderResponse;
  listType: GetListTypeResponse;
  listUser: ListUserResponse;
};


export type QueryDetailOrderArgs = {
  input: ConfirmOrderInput;
};


export type QueryGetListProductArgs = {
  input: GetListProductInput;
};


export type QueryGetProductArgs = {
  input: ReadProductInputDto;
};


export type QueryIsFavoriteProductArgs = {
  input: IsFavoriteProductInput;
};


export type QueryListCommentArgs = {
  input: ListCommentInput;
};


export type QueryListConversationArgs = {
  input: ListConversationInput;
};


export type QueryListFeedbackArgs = {
  input: ListFeedbackInput;
};


export type QueryListMessageArgs = {
  input: ListMessageInput;
};

export type ReadProductInputDto = {
  productId: Scalars['String'];
};

export type RegisterUserInputDto = {
  fullName: Scalars['String'];
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type RegisterUserResponse = {
  __typename?: 'RegisterUserResponse';
  fullName: Scalars['String'];
  otpExpiredTime: Scalars['Float'];
  phoneNumber?: Maybe<Scalars['String']>;
  sessionId: Scalars['String'];
};

export type RemoveFromCartInput = {
  _id: Scalars['String'];
};

export type SendEmailResponse = {
  __typename?: 'SendEmailResponse';
  sessionId?: Maybe<Scalars['String']>;
};

export type SendOtpRequestInput = {
  phoneNumber: Scalars['String'];
};

export type SendOtpResponse = {
  __typename?: 'SendOtpResponse';
  otpExpiredTime?: Maybe<Scalars['Float']>;
  phoneNumber?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['String']>;
};

export type SendPinCodeInput = {
  email: Scalars['String'];
};

export enum ShippingStatus {
  NotShipped = 'NOT_SHIPPED',
  Shipped = 'SHIPPED',
  Shipping = 'SHIPPING'
}

export type Subscription = {
  __typename?: 'Subscription';
  onSendMessage: CommentResponse;
};


export type SubscriptionOnSendMessageArgs = {
  productId: Scalars['String'];
};

export type UpdateAvatarInput = {
  avatarId?: InputMaybe<Scalars['String']>;
};

export type UpdateProductInputDto = {
  productId: Scalars['String'];
  updateInput: ProductInputDto;
};

export type UpdateProfileInputDto = {
  address?: InputMaybe<Scalars['String']>;
  avatarId?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Gender>;
};

export type UpdateProfileResponse = {
  __typename?: 'UpdateProfileResponse';
  updated: Scalars['Boolean'];
};

export type UserDtoType = {
  __typename?: 'UserDtoType';
  _id?: Maybe<Scalars['ID']>;
  active?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  avatarId?: Maybe<Media>;
  birthday?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['Float']>;
  createdBy?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['Float']>;
  deletedBy?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  phoneNumber?: Maybe<Scalars['String']>;
  provider?: Maybe<Provider>;
  providerId?: Maybe<Scalars['String']>;
  twoFactorAuthenticationSecret?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Float']>;
  updatedBy?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  verifyEmail?: Maybe<Scalars['Boolean']>;
  verifyPhone?: Maybe<Scalars['Boolean']>;
};

export type UserPayload = {
  __typename?: 'UserPayload';
  _id: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  avatarId?: Maybe<Media>;
  birthday?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  twoFactorAuthenticationSecret?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Float']>;
  verified?: Maybe<Scalars['Boolean']>;
  verifyEmail?: Maybe<Scalars['Boolean']>;
  verifyPhone?: Maybe<Scalars['Boolean']>;
};

export type VerifyEmailInput = {
  otp: Scalars['String'];
  sessionId: Scalars['String'];
};

export type VerifyPhoneInputDto = {
  otp: Scalars['String'];
  sessionId: Scalars['String'];
};

export type VerifyPhoneResponse = {
  __typename?: 'VerifyPhoneResponse';
  verified: Scalars['Boolean'];
};

export type ComfirmWhenResendMutationVariables = Exact<{
  sessionId: Scalars['String'];
  otp: Scalars['String'];
}>;


export type ComfirmWhenResendMutation = { __typename?: 'Mutation', confirmOtp: { __typename?: 'ConfirmOtpResponse', confirmed?: boolean | null } };

export type ChangePasswordOutSideMutationVariables = Exact<{
  password: Scalars['String'];
  sessionId: Scalars['String'];
  confirmPassword: Scalars['String'];
  otp: Scalars['String'];
}>;


export type ChangePasswordOutSideMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'ChangePasswordResponse', updated: boolean } };

export type InValidOtpMutationVariables = Exact<{
  sessionId: Scalars['String'];
  otp: Scalars['String'];
}>;


export type InValidOtpMutation = { __typename?: 'Mutation', inValidOtp: { __typename?: 'ConfirmOtpResponse', confirmed?: boolean | null } };

export type UserLoginByPhoneMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
  password: Scalars['String'];
}>;


export type UserLoginByPhoneMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'LoginResponse', token: string, refreshToken: string, expiresAt: string, refreshTokenExpiresAt: string, payload?: { __typename?: 'UserPayload', _id: string, fullName?: string | null, phoneNumber?: string | null, verified?: boolean | null, birthday?: string | null, address?: string | null, verifyPhone?: boolean | null, verifyEmail?: boolean | null, avatarId?: { __typename?: 'Media', url?: string | null } | null } | null } };

export type RegisterUserMutationVariables = Exact<{
  password: Scalars['String'];
  phoneNumber: Scalars['String'];
  fullName: Scalars['String'];
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'RegisterUserResponse', sessionId: string, otpExpiredTime: number, phoneNumber?: string | null, fullName: string } };

export type SendPhoneNumberToGetOtpMutationVariables = Exact<{
  input: SendOtpRequestInput;
}>;


export type SendPhoneNumberToGetOtpMutation = { __typename?: 'Mutation', sendOtp: { __typename?: 'SendOtpResponse', phoneNumber?: string | null, sessionId?: string | null, otpExpiredTime?: number | null } };

export type LoginSocialMutationVariables = Exact<{
  provider: Provider;
  accessToken: Scalars['String'];
}>;


export type LoginSocialMutation = { __typename?: 'Mutation', loginSocial: { __typename?: 'LoginResponse', token: string, refreshToken: string, expiresAt: string, refreshTokenExpiresAt: string, payload?: { __typename?: 'UserPayload', _id: string, fullName?: string | null, phoneNumber?: string | null, verifyPhone?: boolean | null, verifyEmail?: boolean | null, verified?: boolean | null, birthday?: string | null, address?: string | null, avatarId?: { __typename?: 'Media', url?: string | null } | null } | null } };

export type VerifyPhoneMutationVariables = Exact<{
  sessionId: Scalars['String'];
  otp: Scalars['String'];
}>;


export type VerifyPhoneMutation = { __typename?: 'Mutation', verifyPhone: { __typename?: 'VerifyPhoneResponse', verified: boolean } };

export type AddToCartMutationVariables = Exact<{
  input: AddToCartInput;
}>;


export type AddToCartMutation = { __typename?: 'Mutation', addToCart: { __typename?: 'BooleanPayload', success?: boolean | null } };

export type ClearCartMutationVariables = Exact<{ [key: string]: never; }>;


export type ClearCartMutation = { __typename?: 'Mutation', clearCart: { __typename?: 'BooleanPayload', success?: boolean | null } };

export type CreatePaymentMutationVariables = Exact<{
  input: CreatePaymentInputDto;
}>;


export type CreatePaymentMutation = { __typename?: 'Mutation', createPayment: { __typename?: 'CreatePaymentResponse', redirectUrl?: string | null, success?: boolean | null } };

export type ListCartQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCartQuery = { __typename?: 'Query', listCart: { __typename?: 'ListCartType', cart?: Array<{ __typename?: 'CartType', userId?: string | null, _id?: string | null, quantity?: number | null, productId?: string | null, status?: boolean | null, price?: number | null }> | null } };

export type RemoveFromCartMutationVariables = Exact<{
  input: RemoveFromCartInput;
}>;


export type RemoveFromCartMutation = { __typename?: 'Mutation', removeFromCart: { __typename?: 'BooleanPayload', success?: boolean | null } };

export type CreateCommentMutationVariables = Exact<{
  input: CreateCommentInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'CommentResponse', _id: string, message: string, productId?: string | null } };

export type FavoriteProductMutationVariables = Exact<{
  input: FavoriteProductInput;
}>;


export type FavoriteProductMutation = { __typename?: 'Mutation', favoriteProduct: { __typename?: 'BooleanPayload', success?: boolean | null } };

export type GetListCommentQueryVariables = Exact<{
  input: ListCommentInput;
}>;


export type GetListCommentQuery = { __typename?: 'Query', listComment: { __typename?: 'ListCommentResponse', data?: Array<{ __typename?: 'CommentResponse', _id: string, message: string, createdAt?: number | null, countFeedback?: number | null, user?: { __typename?: 'UserDtoType', fullName?: string | null, avatarId?: { __typename?: 'Media', url?: string | null } | null } | null }> | null } };

export type GetListFeedbackQueryVariables = Exact<{
  input: ListFeedbackInput;
}>;


export type GetListFeedbackQuery = { __typename?: 'Query', listFeedback: { __typename?: 'ListCommentResponse', data?: Array<{ __typename?: 'CommentResponse', _id: string, parentId?: string | null, message: string, createdAt?: number | null, user?: { __typename?: 'UserDtoType', fullName?: string | null, avatarId?: { __typename?: 'Media', url?: string | null } | null } | null }> | null } };

export type GetListProductQueryVariables = Exact<{
  input: GetListProductInput;
}>;


export type GetListProductQuery = { __typename?: 'Query', getListProduct: { __typename?: 'GetListProductResponse', totalItem?: number | null, products?: Array<{ __typename?: 'ProductPayload', _id?: string | null, name?: string | null, description?: string | null, totalSold?: number | null, price?: number | null, image?: { __typename?: 'Media', url?: string | null } | null }> | null, pagination?: { __typename?: 'PaginationResponse', totalPage?: number | null, currentPage?: number | null, pageSize?: number | null } | null } };

export type GetProductQueryVariables = Exact<{
  input: ReadProductInputDto;
}>;


export type GetProductQuery = { __typename?: 'Query', getProduct: { __typename?: 'GetProductResponse', product?: { __typename?: 'ProductPayload', _id?: string | null, name?: string | null, description?: string | null, price?: number | null, countInStock?: number | null, manufacturer?: string | null, modelNumber?: string | null, dimensions?: string | null, weight?: string | null, connectivity?: string | null, powerSource?: string | null, compatibility?: string | null, warranty?: string | null, totalLike?: number | null, totalComment?: number | null, type?: string | null, totalSold?: number | null, image?: { __typename?: 'Media', url?: string | null } | null } | null } };

export type IsFavoriteProductQueryVariables = Exact<{
  input: IsFavoriteProductInput;
}>;


export type IsFavoriteProductQuery = { __typename?: 'Query', isFavoriteProduct: { __typename?: 'BooleanPayload', success?: boolean | null } };

export type ListTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTypeQuery = { __typename?: 'Query', listType: { __typename?: 'GetListTypeResponse', data?: Array<{ __typename?: 'ProductType', _id?: string | null, name?: string | null }> | null } };

export type CreateConversationMutationVariables = Exact<{
  input: CreateConversationInput;
}>;


export type CreateConversationMutation = { __typename?: 'Mutation', createConversation: { __typename?: 'CreateConversationType', conversation: { __typename?: 'ConversationDtoType', _id: string } } };

export type GetIdAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIdAdminQuery = { __typename?: 'Query', getIdAdmin: { __typename?: 'GetIdAdminResponse', id: string } };

export type ListMessageQueryVariables = Exact<{
  input: ListMessageInput;
}>;


export type ListMessageQuery = { __typename?: 'Query', listMessage: { __typename?: 'ListMessageResponse', data: Array<{ __typename?: 'MessageDtoType', content: string, createdAt?: number | null, senderId?: { __typename?: 'UserDtoType', _id?: string | null, fullName?: string | null, avatarId?: { __typename?: 'Media', url?: string | null } | null } | null }> } };

export type ListOrderUserQueryVariables = Exact<{ [key: string]: never; }>;


export type ListOrderUserQuery = { __typename?: 'Query', listOrderUser: { __typename?: 'ListOrderResponse', orders?: Array<{ __typename?: 'OrderDto', _id?: string | null, code?: string | null, status?: OrderStatus | null, amount?: number | null, description?: string | null, couponCode?: string | null, discountAmount?: number | null, subTotal?: number | null, paymentMethod?: PaymentMethod | null, shippingStatus?: ShippingStatus | null, shippingAddress?: string | null, createdAt?: number | null, transaction?: { __typename?: 'OrderTransactionType', gateway?: string | null, id?: string | null, time?: number | null } | null, items?: Array<{ __typename?: 'OrderItemResponse', name?: string | null, quantity: number, price: number, id?: { __typename?: 'ProductPayload', _id?: string | null, name?: string | null, image?: { __typename?: 'Media', url?: string | null } | null } | null }> | null, userId?: { __typename?: 'UserDtoType', _id?: string | null, fullName?: string | null, avatarId?: { __typename?: 'Media', url?: string | null } | null } | null }> | null } };

export type SendEmailMutationVariables = Exact<{
  input: SendPinCodeInput;
}>;


export type SendEmailMutation = { __typename?: 'Mutation', sendEmail: { __typename?: 'SendEmailResponse', sessionId?: string | null } };

export type UpdateAvatarUserMutationVariables = Exact<{
  input: UpdateAvatarInput;
}>;


export type UpdateAvatarUserMutation = { __typename?: 'Mutation', updateAvatarUser: { __typename?: 'BooleanPayload', success?: boolean | null } };

export type UpdateProfileMutationVariables = Exact<{
  input: UpdateProfileInputDto;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'UpdateProfileResponse', updated: boolean } };

export type VerifyEmailMutationVariables = Exact<{
  input: VerifyEmailInput;
}>;


export type VerifyEmailMutation = { __typename?: 'Mutation', verifyEmail: { __typename?: 'BooleanPayload', success?: boolean | null } };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', getMe: { __typename?: 'UserDtoType', _id?: string | null, fullName?: string | null, phoneNumber?: string | null, verified?: boolean | null, birthday?: number | null, address?: string | null, email?: string | null, gender?: Gender | null, verifyPhone?: boolean | null, verifyEmail?: boolean | null, avatarId?: { __typename?: 'Media', _id?: string | null, url?: string | null } | null } };


export const ComfirmWhenResendDocument = `
    mutation comfirmWhenResend($sessionId: String!, $otp: String!) {
  confirmOtp(input: {sessionId: $sessionId, otp: $otp}) {
    confirmed
  }
}
    `;
export const useComfirmWhenResendMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ComfirmWhenResendMutation, TError, ComfirmWhenResendMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<ComfirmWhenResendMutation, TError, ComfirmWhenResendMutationVariables, TContext>(
      ['comfirmWhenResend'],
      (variables?: ComfirmWhenResendMutationVariables) => fetcher<ComfirmWhenResendMutation, ComfirmWhenResendMutationVariables>(client, ComfirmWhenResendDocument, variables, headers)(),
      options
    );
export const ChangePasswordOutSideDocument = `
    mutation changePasswordOutSide($password: String!, $sessionId: String!, $confirmPassword: String!, $otp: String!) {
  changePassword(
    input: {password: $password, sessionId: $sessionId, confirmPassword: $confirmPassword, otp: $otp}
  ) {
    updated
  }
}
    `;
export const useChangePasswordOutSideMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ChangePasswordOutSideMutation, TError, ChangePasswordOutSideMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<ChangePasswordOutSideMutation, TError, ChangePasswordOutSideMutationVariables, TContext>(
      ['changePasswordOutSide'],
      (variables?: ChangePasswordOutSideMutationVariables) => fetcher<ChangePasswordOutSideMutation, ChangePasswordOutSideMutationVariables>(client, ChangePasswordOutSideDocument, variables, headers)(),
      options
    );
export const InValidOtpDocument = `
    mutation inValidOtp($sessionId: String!, $otp: String!) {
  inValidOtp(input: {sessionId: $sessionId, otp: $otp}) {
    confirmed
  }
}
    `;
export const useInValidOtpMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<InValidOtpMutation, TError, InValidOtpMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<InValidOtpMutation, TError, InValidOtpMutationVariables, TContext>(
      ['inValidOtp'],
      (variables?: InValidOtpMutationVariables) => fetcher<InValidOtpMutation, InValidOtpMutationVariables>(client, InValidOtpDocument, variables, headers)(),
      options
    );
export const UserLoginByPhoneDocument = `
    mutation userLoginByPhone($phoneNumber: String!, $password: String!) {
  loginUser(input: {phoneNumber: $phoneNumber, password: $password}) {
    token
    refreshToken
    expiresAt
    refreshTokenExpiresAt
    payload {
      _id
      fullName
      phoneNumber
      verified
      birthday
      address
      avatarId {
        url
      }
      verifyPhone
      verifyEmail
    }
  }
}
    `;
export const useUserLoginByPhoneMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UserLoginByPhoneMutation, TError, UserLoginByPhoneMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UserLoginByPhoneMutation, TError, UserLoginByPhoneMutationVariables, TContext>(
      ['userLoginByPhone'],
      (variables?: UserLoginByPhoneMutationVariables) => fetcher<UserLoginByPhoneMutation, UserLoginByPhoneMutationVariables>(client, UserLoginByPhoneDocument, variables, headers)(),
      options
    );
export const RegisterUserDocument = `
    mutation registerUser($password: String!, $phoneNumber: String!, $fullName: String!) {
  registerUser(
    input: {password: $password, phoneNumber: $phoneNumber, fullName: $fullName}
  ) {
    sessionId
    otpExpiredTime
    phoneNumber
    fullName
  }
}
    `;
export const useRegisterUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RegisterUserMutation, TError, RegisterUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RegisterUserMutation, TError, RegisterUserMutationVariables, TContext>(
      ['registerUser'],
      (variables?: RegisterUserMutationVariables) => fetcher<RegisterUserMutation, RegisterUserMutationVariables>(client, RegisterUserDocument, variables, headers)(),
      options
    );
export const SendPhoneNumberToGetOtpDocument = `
    mutation sendPhoneNumberToGetOTP($input: SendOtpRequestInput!) {
  sendOtp(input: $input) {
    phoneNumber
    sessionId
    otpExpiredTime
  }
}
    `;
export const useSendPhoneNumberToGetOtpMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<SendPhoneNumberToGetOtpMutation, TError, SendPhoneNumberToGetOtpMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<SendPhoneNumberToGetOtpMutation, TError, SendPhoneNumberToGetOtpMutationVariables, TContext>(
      ['sendPhoneNumberToGetOTP'],
      (variables?: SendPhoneNumberToGetOtpMutationVariables) => fetcher<SendPhoneNumberToGetOtpMutation, SendPhoneNumberToGetOtpMutationVariables>(client, SendPhoneNumberToGetOtpDocument, variables, headers)(),
      options
    );
export const LoginSocialDocument = `
    mutation loginSocial($provider: Provider!, $accessToken: String!) {
  loginSocial(input: {provider: $provider, accessToken: $accessToken}) {
    token
    refreshToken
    expiresAt
    refreshTokenExpiresAt
    payload {
      _id
      fullName
      phoneNumber
      verifyPhone
      verifyEmail
      verified
      birthday
      address
      avatarId {
        url
      }
    }
  }
}
    `;
export const useLoginSocialMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<LoginSocialMutation, TError, LoginSocialMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<LoginSocialMutation, TError, LoginSocialMutationVariables, TContext>(
      ['loginSocial'],
      (variables?: LoginSocialMutationVariables) => fetcher<LoginSocialMutation, LoginSocialMutationVariables>(client, LoginSocialDocument, variables, headers)(),
      options
    );
export const VerifyPhoneDocument = `
    mutation verifyPhone($sessionId: String!, $otp: String!) {
  verifyPhone(input: {sessionId: $sessionId, otp: $otp}) {
    verified
  }
}
    `;
export const useVerifyPhoneMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<VerifyPhoneMutation, TError, VerifyPhoneMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<VerifyPhoneMutation, TError, VerifyPhoneMutationVariables, TContext>(
      ['verifyPhone'],
      (variables?: VerifyPhoneMutationVariables) => fetcher<VerifyPhoneMutation, VerifyPhoneMutationVariables>(client, VerifyPhoneDocument, variables, headers)(),
      options
    );
export const AddToCartDocument = `
    mutation addToCart($input: AddToCartInput!) {
  addToCart(input: $input) {
    success
  }
}
    `;
export const useAddToCartMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<AddToCartMutation, TError, AddToCartMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<AddToCartMutation, TError, AddToCartMutationVariables, TContext>(
      ['addToCart'],
      (variables?: AddToCartMutationVariables) => fetcher<AddToCartMutation, AddToCartMutationVariables>(client, AddToCartDocument, variables, headers)(),
      options
    );
export const ClearCartDocument = `
    mutation clearCart {
  clearCart {
    success
  }
}
    `;
export const useClearCartMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<ClearCartMutation, TError, ClearCartMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<ClearCartMutation, TError, ClearCartMutationVariables, TContext>(
      ['clearCart'],
      (variables?: ClearCartMutationVariables) => fetcher<ClearCartMutation, ClearCartMutationVariables>(client, ClearCartDocument, variables, headers)(),
      options
    );
export const CreatePaymentDocument = `
    mutation createPayment($input: CreatePaymentInputDto!) {
  createPayment(input: $input) {
    redirectUrl
    success
  }
}
    `;
export const useCreatePaymentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreatePaymentMutation, TError, CreatePaymentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreatePaymentMutation, TError, CreatePaymentMutationVariables, TContext>(
      ['createPayment'],
      (variables?: CreatePaymentMutationVariables) => fetcher<CreatePaymentMutation, CreatePaymentMutationVariables>(client, CreatePaymentDocument, variables, headers)(),
      options
    );
export const ListCartDocument = `
    query listCart {
  listCart {
    cart {
      userId
      _id
      quantity
      productId
      status
      price
    }
  }
}
    `;
export const useListCartQuery = <
      TData = ListCartQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: ListCartQueryVariables,
      options?: UseQueryOptions<ListCartQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<ListCartQuery, TError, TData>(
      variables === undefined ? ['listCart'] : ['listCart', variables],
      fetcher<ListCartQuery, ListCartQueryVariables>(client, ListCartDocument, variables, headers),
      options
    );
export const RemoveFromCartDocument = `
    mutation removeFromCart($input: RemoveFromCartInput!) {
  removeFromCart(input: $input) {
    success
  }
}
    `;
export const useRemoveFromCartMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RemoveFromCartMutation, TError, RemoveFromCartMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RemoveFromCartMutation, TError, RemoveFromCartMutationVariables, TContext>(
      ['removeFromCart'],
      (variables?: RemoveFromCartMutationVariables) => fetcher<RemoveFromCartMutation, RemoveFromCartMutationVariables>(client, RemoveFromCartDocument, variables, headers)(),
      options
    );
export const CreateCommentDocument = `
    mutation createComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    _id
    message
    productId
  }
}
    `;
export const useCreateCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateCommentMutation, TError, CreateCommentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateCommentMutation, TError, CreateCommentMutationVariables, TContext>(
      ['createComment'],
      (variables?: CreateCommentMutationVariables) => fetcher<CreateCommentMutation, CreateCommentMutationVariables>(client, CreateCommentDocument, variables, headers)(),
      options
    );
export const FavoriteProductDocument = `
    mutation favoriteProduct($input: FavoriteProductInput!) {
  favoriteProduct(input: $input) {
    success
  }
}
    `;
export const useFavoriteProductMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<FavoriteProductMutation, TError, FavoriteProductMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<FavoriteProductMutation, TError, FavoriteProductMutationVariables, TContext>(
      ['favoriteProduct'],
      (variables?: FavoriteProductMutationVariables) => fetcher<FavoriteProductMutation, FavoriteProductMutationVariables>(client, FavoriteProductDocument, variables, headers)(),
      options
    );
export const GetListCommentDocument = `
    query getListComment($input: ListCommentInput!) {
  listComment(input: $input) {
    data {
      _id
      user {
        avatarId {
          url
        }
        fullName
      }
      message
      createdAt
      countFeedback
    }
  }
}
    `;
export const useGetListCommentQuery = <
      TData = GetListCommentQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetListCommentQueryVariables,
      options?: UseQueryOptions<GetListCommentQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetListCommentQuery, TError, TData>(
      ['getListComment', variables],
      fetcher<GetListCommentQuery, GetListCommentQueryVariables>(client, GetListCommentDocument, variables, headers),
      options
    );
export const GetListFeedbackDocument = `
    query getListFeedback($input: ListFeedbackInput!) {
  listFeedback(input: $input) {
    data {
      _id
      user {
        avatarId {
          url
        }
        fullName
      }
      parentId
      message
      createdAt
    }
  }
}
    `;
export const useGetListFeedbackQuery = <
      TData = GetListFeedbackQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetListFeedbackQueryVariables,
      options?: UseQueryOptions<GetListFeedbackQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetListFeedbackQuery, TError, TData>(
      ['getListFeedback', variables],
      fetcher<GetListFeedbackQuery, GetListFeedbackQueryVariables>(client, GetListFeedbackDocument, variables, headers),
      options
    );
export const GetListProductDocument = `
    query getListProduct($input: GetListProductInput!) {
  getListProduct(input: $input) {
    products {
      _id
      name
      description
      totalSold
      price
      image {
        url
      }
    }
    pagination {
      totalPage
      currentPage
      pageSize
    }
    totalItem
  }
}
    `;
export const useGetListProductQuery = <
      TData = GetListProductQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetListProductQueryVariables,
      options?: UseQueryOptions<GetListProductQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetListProductQuery, TError, TData>(
      ['getListProduct', variables],
      fetcher<GetListProductQuery, GetListProductQueryVariables>(client, GetListProductDocument, variables, headers),
      options
    );
export const GetProductDocument = `
    query getProduct($input: ReadProductInputDto!) {
  getProduct(input: $input) {
    product {
      _id
      name
      description
      price
      countInStock
      image {
        url
      }
      manufacturer
      modelNumber
      dimensions
      weight
      connectivity
      powerSource
      compatibility
      warranty
      totalLike
      totalComment
      type
      totalSold
    }
  }
}
    `;
export const useGetProductQuery = <
      TData = GetProductQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetProductQueryVariables,
      options?: UseQueryOptions<GetProductQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetProductQuery, TError, TData>(
      ['getProduct', variables],
      fetcher<GetProductQuery, GetProductQueryVariables>(client, GetProductDocument, variables, headers),
      options
    );
export const IsFavoriteProductDocument = `
    query isFavoriteProduct($input: IsFavoriteProductInput!) {
  isFavoriteProduct(input: $input) {
    success
  }
}
    `;
export const useIsFavoriteProductQuery = <
      TData = IsFavoriteProductQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: IsFavoriteProductQueryVariables,
      options?: UseQueryOptions<IsFavoriteProductQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<IsFavoriteProductQuery, TError, TData>(
      ['isFavoriteProduct', variables],
      fetcher<IsFavoriteProductQuery, IsFavoriteProductQueryVariables>(client, IsFavoriteProductDocument, variables, headers),
      options
    );
export const ListTypeDocument = `
    query ListType {
  listType {
    data {
      _id
      name
    }
  }
}
    `;
export const useListTypeQuery = <
      TData = ListTypeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: ListTypeQueryVariables,
      options?: UseQueryOptions<ListTypeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<ListTypeQuery, TError, TData>(
      variables === undefined ? ['ListType'] : ['ListType', variables],
      fetcher<ListTypeQuery, ListTypeQueryVariables>(client, ListTypeDocument, variables, headers),
      options
    );
export const CreateConversationDocument = `
    mutation createConversation($input: CreateConversationInput!) {
  createConversation(input: $input) {
    conversation {
      _id
    }
  }
}
    `;
export const useCreateConversationMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateConversationMutation, TError, CreateConversationMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateConversationMutation, TError, CreateConversationMutationVariables, TContext>(
      ['createConversation'],
      (variables?: CreateConversationMutationVariables) => fetcher<CreateConversationMutation, CreateConversationMutationVariables>(client, CreateConversationDocument, variables, headers)(),
      options
    );
export const GetIdAdminDocument = `
    query getIdAdmin {
  getIdAdmin {
    id
  }
}
    `;
export const useGetIdAdminQuery = <
      TData = GetIdAdminQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetIdAdminQueryVariables,
      options?: UseQueryOptions<GetIdAdminQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetIdAdminQuery, TError, TData>(
      variables === undefined ? ['getIdAdmin'] : ['getIdAdmin', variables],
      fetcher<GetIdAdminQuery, GetIdAdminQueryVariables>(client, GetIdAdminDocument, variables, headers),
      options
    );
export const ListMessageDocument = `
    query listMessage($input: ListMessageInput!) {
  listMessage(input: $input) {
    data {
      senderId {
        _id
        fullName
        avatarId {
          url
        }
      }
      content
      createdAt
    }
  }
}
    `;
export const useListMessageQuery = <
      TData = ListMessageQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: ListMessageQueryVariables,
      options?: UseQueryOptions<ListMessageQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<ListMessageQuery, TError, TData>(
      ['listMessage', variables],
      fetcher<ListMessageQuery, ListMessageQueryVariables>(client, ListMessageDocument, variables, headers),
      options
    );
export const ListOrderUserDocument = `
    query listOrderUser {
  listOrderUser {
    orders {
      _id
      code
      status
      amount
      description
      couponCode
      discountAmount
      subTotal
      paymentMethod
      transaction {
        gateway
        id
        time
      }
      items {
        id {
          _id
          name
          image {
            url
          }
        }
        name
        quantity
        price
      }
      shippingStatus
      shippingAddress
      createdAt
      userId {
        _id
        fullName
        avatarId {
          url
        }
      }
    }
  }
}
    `;
export const useListOrderUserQuery = <
      TData = ListOrderUserQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: ListOrderUserQueryVariables,
      options?: UseQueryOptions<ListOrderUserQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<ListOrderUserQuery, TError, TData>(
      variables === undefined ? ['listOrderUser'] : ['listOrderUser', variables],
      fetcher<ListOrderUserQuery, ListOrderUserQueryVariables>(client, ListOrderUserDocument, variables, headers),
      options
    );
export const SendEmailDocument = `
    mutation sendEmail($input: SendPinCodeInput!) {
  sendEmail(input: $input) {
    sessionId
  }
}
    `;
export const useSendEmailMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<SendEmailMutation, TError, SendEmailMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<SendEmailMutation, TError, SendEmailMutationVariables, TContext>(
      ['sendEmail'],
      (variables?: SendEmailMutationVariables) => fetcher<SendEmailMutation, SendEmailMutationVariables>(client, SendEmailDocument, variables, headers)(),
      options
    );
export const UpdateAvatarUserDocument = `
    mutation updateAvatarUser($input: UpdateAvatarInput!) {
  updateAvatarUser(input: $input) {
    success
  }
}
    `;
export const useUpdateAvatarUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateAvatarUserMutation, TError, UpdateAvatarUserMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateAvatarUserMutation, TError, UpdateAvatarUserMutationVariables, TContext>(
      ['updateAvatarUser'],
      (variables?: UpdateAvatarUserMutationVariables) => fetcher<UpdateAvatarUserMutation, UpdateAvatarUserMutationVariables>(client, UpdateAvatarUserDocument, variables, headers)(),
      options
    );
export const UpdateProfileDocument = `
    mutation updateProfile($input: UpdateProfileInputDto!) {
  updateProfile(input: $input) {
    updated
  }
}
    `;
export const useUpdateProfileMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateProfileMutation, TError, UpdateProfileMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateProfileMutation, TError, UpdateProfileMutationVariables, TContext>(
      ['updateProfile'],
      (variables?: UpdateProfileMutationVariables) => fetcher<UpdateProfileMutation, UpdateProfileMutationVariables>(client, UpdateProfileDocument, variables, headers)(),
      options
    );
export const VerifyEmailDocument = `
    mutation verifyEmail($input: VerifyEmailInput!) {
  verifyEmail(input: $input) {
    success
  }
}
    `;
export const useVerifyEmailMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<VerifyEmailMutation, TError, VerifyEmailMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<VerifyEmailMutation, TError, VerifyEmailMutationVariables, TContext>(
      ['verifyEmail'],
      (variables?: VerifyEmailMutationVariables) => fetcher<VerifyEmailMutation, VerifyEmailMutationVariables>(client, VerifyEmailDocument, variables, headers)(),
      options
    );
export const GetMeDocument = `
    query getMe {
  getMe {
    _id
    fullName
    phoneNumber
    verified
    birthday
    address
    email
    gender
    avatarId {
      _id
      url
    }
    verifyPhone
    verifyEmail
  }
}
    `;
export const useGetMeQuery = <
      TData = GetMeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetMeQueryVariables,
      options?: UseQueryOptions<GetMeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetMeQuery, TError, TData>(
      variables === undefined ? ['getMe'] : ['getMe', variables],
      fetcher<GetMeQuery, GetMeQueryVariables>(client, GetMeDocument, variables, headers),
      options
    );