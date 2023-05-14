import type { GraphQLClient } from 'graphql-request';
import type { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
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

export type CommentResponse = {
  __typename?: 'CommentResponse';
  _id: Scalars['String'];
  message: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
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
  confirmOtp: ConfirmOtpResponse;
  createAdmin: BooleanPayload;
  createConversation: CreateConversationType;
  createPayment: CreatePaymentResponse;
  createProduct: BooleanPayload;
  createType: BooleanPayload;
  deleteProduct: BooleanPayload;
  loginSocial: LoginResponse;
  loginUser: LoginResponse;
  registerUser: RegisterUserResponse;
  sendEmailVerify: BooleanPayload;
  sendMessage: CommentResponse;
  sendOtp: SendOtpResponse;
  updateProduct: BooleanPayload;
  verifyPhone: VerifyPhoneResponse;
};


export type MutationConfirmOtpArgs = {
  input: ConfirmOtpRequestInput;
};


export type MutationCreateAdminArgs = {
  input: AdminInputDto;
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


export type MutationSendMessageArgs = {
  input: CreateCommentInput;
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
  total_comment?: Maybe<Scalars['String']>;
  total_like?: Maybe<Scalars['Float']>;
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
  listType: GetListTypeResponse;
  sayHello: Scalars['String'];
};


export type QueryGetListProductArgs = {
  input: GetListProductInput;
};


export type QueryGetProductArgs = {
  input: ReadProductInputDto;
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
  avatarId?: Maybe<Scalars['String']>;
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
  avatarId?: Maybe<Scalars['String']>;
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

export type GetlistProductQueryVariables = Exact<{
  input: GetListProductInput;
}>;


export type GetlistProductQuery = { __typename?: 'Query', getListProduct: { __typename?: 'GetListProductResponse', totalItem?: number | null, products?: Array<{ __typename?: 'ProductPayload', _id?: string | null, name?: string | null, description?: string | null, countInStock?: number | null, total_like?: number | null, price?: number | null, image?: { __typename?: 'Media', url?: string | null } | null }> | null, pagination?: { __typename?: 'PaginationResponse', totalPage?: number | null, currentPage?: number | null, pageSize?: number | null } | null } };

export type ListTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTypeQuery = { __typename?: 'Query', listType: { __typename?: 'GetListTypeResponse', data?: Array<{ __typename?: 'ProductType', _id?: string | null, name?: string | null }> | null } };


export const GetlistProductDocument = `
    query getlistProduct($input: GetListProductInput!) {
  getListProduct(input: $input) {
    products {
      _id
      name
      description
      countInStock
      total_like
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
export const useGetlistProductQuery = <
      TData = GetlistProductQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetlistProductQueryVariables,
      options?: UseQueryOptions<GetlistProductQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetlistProductQuery, TError, TData>(
      ['getlistProduct', variables],
      fetcher<GetlistProductQuery, GetlistProductQueryVariables>(client, GetlistProductDocument, variables, headers),
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