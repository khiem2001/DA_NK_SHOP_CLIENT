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

export type AdminInputDto = {
  password: Scalars['String'];
  userName: Scalars['String'];
};

export type BooleanPayload = {
  __typename?: 'BooleanPayload';
  success?: Maybe<Scalars['Boolean']>;
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
  createdAt?: Maybe<Scalars['Float']>;
  message: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Float']>;
  user?: Maybe<UserDtoType>;
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
  members: Array<Scalars['String']>;
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
  shippingAddress?: InputMaybe<Scalars['String']>;
};

export type CreatePaymentResponse = {
  __typename?: 'CreatePaymentResponse';
  redirectUrl?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateProductInputDto = {
  compatibility: Scalars['String'];
  connectivity: Scalars['String'];
  countInStock: Scalars['Float'];
  description: Scalars['String'];
  dimensions: Scalars['String'];
  image: Scalars['String'];
  manufacturer: Scalars['String'];
  modelNumber: Scalars['String'];
  name: Scalars['String'];
  powerSource: Scalars['String'];
  price: Scalars['Float'];
  type: Scalars['String'];
  video: Scalars['String'];
  warranty: Scalars['String'];
  weight: Scalars['String'];
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

export type GetListProductInput = {
  filter?: InputMaybe<FilterProductInput>;
  pagination: PaginationBaseInput;
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

export type ListCommentInput = {
  id: Scalars['String'];
};

export type ListCommentResponse = {
  __typename?: 'ListCommentResponse';
  data?: Maybe<Array<CommentResponse>>;
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

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: ChangePasswordResponse;
  confirmOtp: ConfirmOtpResponse;
  createAdmin: BooleanPayload;
  createComment: CommentResponse;
  createConversation: CreateConversationType;
  createPayment: CreatePaymentResponse;
  createProduct: BooleanPayload;
  createType: BooleanPayload;
  deleteProduct: BooleanPayload;
  inValidOtp: ConfirmOtpResponse;
  loginSocial: LoginResponse;
  loginUser: LoginResponse;
  registerUser: RegisterUserResponse;
  sendEmailVerify: BooleanPayload;
  sendOtp: SendOtpResponse;
  updateProduct: BooleanPayload;
  verifyPhone: VerifyPhoneResponse;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInputDto;
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


export type MutationInValidOtpArgs = {
  input: ConfirmOtpRequestInput;
};


export type MutationLoginSocialArgs = {
  input: LoginSocialInputDto;
};


export type MutationLoginUserArgs = {
  input: LoginUserInputDto;
};


export type MutationRegisterUserArgs = {
  input: RegisterUserInputDto;
};


export type MutationSendEmailVerifyArgs = {
  input: SendPinCodeInput;
};


export type MutationSendOtpArgs = {
  input: SendOtpRequestInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInputDto;
};


export type MutationVerifyPhoneArgs = {
  input: VerifyPhoneInputDto;
};

export type OrderItem = {
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Float'];
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

export type ProductInputDto = {
  compatibility: Scalars['String'];
  connectivity: Scalars['String'];
  countInStock: Scalars['Float'];
  description: Scalars['String'];
  dimensions: Scalars['String'];
  image: Scalars['String'];
  manufacturer: Scalars['String'];
  modelNumber: Scalars['String'];
  name: Scalars['String'];
  powerSource: Scalars['String'];
  price: Scalars['Float'];
  video: Scalars['String'];
  warranty: Scalars['String'];
  weight: Scalars['String'];
};

export type ProductPayload = {
  __typename?: 'ProductPayload';
  _id?: Maybe<Scalars['String']>;
  compatibility?: Maybe<Scalars['String']>;
  connectivity?: Maybe<Scalars['String']>;
  countInStock?: Maybe<Scalars['Float']>;
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
  getListProduct: GetListProductResponse;
  getProduct: GetProductResponse;
  listComment: ListCommentResponse;
  listType: GetListTypeResponse;
  sayHello: Scalars['String'];
};


export type QueryGetListProductArgs = {
  input: GetListProductInput;
};


export type QueryGetProductArgs = {
  input: ReadProductInputDto;
};


export type QueryListCommentArgs = {
  input: ListCommentInput;
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
  pinCode: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onSendMessage: CommentResponse;
};


export type SubscriptionOnSendMessageArgs = {
  productId: Scalars['String'];
};

export type UpdateProductInputDto = {
  productId: Scalars['String'];
  updateInput: ProductInputDto;
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
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  twoFactorAuthenticationSecret?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Float']>;
  verified?: Maybe<Scalars['Boolean']>;
  verifyEmail?: Maybe<Scalars['Boolean']>;
  verifyPhone?: Maybe<Scalars['Boolean']>;
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


export type LoginSocialMutation = { __typename?: 'Mutation', loginSocial: { __typename?: 'LoginResponse', token: string, refreshToken: string, expiresAt: string, refreshTokenExpiresAt: string, payload?: { __typename?: 'UserPayload', _id: string, fullName?: string | null, phoneNumber?: string | null, verified?: boolean | null, birthday?: string | null, address?: string | null, avatarId?: { __typename?: 'Media', url?: string | null } | null } | null } };

export type VerifyPhoneMutationVariables = Exact<{
  sessionId: Scalars['String'];
  otp: Scalars['String'];
}>;


export type VerifyPhoneMutation = { __typename?: 'Mutation', verifyPhone: { __typename?: 'VerifyPhoneResponse', verified: boolean } };

export type GetListCommentQueryVariables = Exact<{
  input: ListCommentInput;
}>;


export type GetListCommentQuery = { __typename?: 'Query', listComment: { __typename?: 'ListCommentResponse', data?: Array<{ __typename?: 'CommentResponse', _id: string, message: string, createdAt?: number | null, user?: { __typename?: 'UserDtoType', fullName?: string | null, avatarId?: { __typename?: 'Media', url?: string | null } | null } | null }> | null } };

export type GetListProductQueryVariables = Exact<{
  input: GetListProductInput;
}>;


export type GetListProductQuery = { __typename?: 'Query', getListProduct: { __typename?: 'GetListProductResponse', totalItem?: number | null, products?: Array<{ __typename?: 'ProductPayload', _id?: string | null, name?: string | null, description?: string | null, totalSold?: number | null, price?: number | null, image?: { __typename?: 'Media', url?: string | null } | null }> | null, pagination?: { __typename?: 'PaginationResponse', totalPage?: number | null, currentPage?: number | null, pageSize?: number | null } | null } };

export type GetProductQueryVariables = Exact<{
  input: ReadProductInputDto;
}>;


export type GetProductQuery = { __typename?: 'Query', getProduct: { __typename?: 'GetProductResponse', product?: { __typename?: 'ProductPayload', _id?: string | null, name?: string | null, description?: string | null, price?: number | null, countInStock?: number | null, manufacturer?: string | null, modelNumber?: string | null, dimensions?: string | null, weight?: string | null, connectivity?: string | null, powerSource?: string | null, compatibility?: string | null, warranty?: string | null, totalLike?: number | null, totalComment?: number | null, type?: string | null, totalSold?: number | null, image?: { __typename?: 'Media', url?: string | null } | null } | null } };

export type ListTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTypeQuery = { __typename?: 'Query', listType: { __typename?: 'GetListTypeResponse', data?: Array<{ __typename?: 'ProductType', _id?: string | null, name?: string | null }> | null } };


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