export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export enum IBoard_Status_Enum {
  Finished = 'FINISHED',
  Inprogress = 'INPROGRESS',
  Recruiting = 'RECRUITING'
}

export type IBankAccount = {
  __typename?: 'BankAccount';
  bankAccountNum: Scalars['String'];
  company: Scalars['String'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
};

export type IBankAccountInput = {
  bankAccountNum: Scalars['String'];
  company: Scalars['String'];
};

export type IBoard = {
  __typename?: 'Board';
  category: ICategory;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  dueDate: Scalars['DateTime'];
  id: Scalars['String'];
  image: Array<IImage>;
  location: ILocation;
  price: Scalars['Int'];
  status: IBoard_Status_Enum;
  storeName: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type ICategory = {
  __typename?: 'Category';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ICreateBoardInput = {
  category: Scalars['String'];
  contents: Scalars['String'];
  dueDate: Scalars['DateTime'];
  image: Array<Scalars['String']>;
  location: ILocationInput;
  price: Scalars['Int'];
  storeName: Scalars['String'];
  title: Scalars['String'];
};

export type ICreateEventInput = {
  contents: Scalars['String'];
  fakeData: Scalars['String'];
  image: Scalars['String'];
  location: Scalars['String'];
  period: Scalars['DateTime'];
  title: Scalars['String'];
};

export type ICreateInquiryInput = {
  contents: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  nickName: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  profileImg: Scalars['String'];
};

export type IEvent = {
  __typename?: 'Event';
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  image: Scalars['String'];
  location: Scalars['String'];
  period: Scalars['DateTime'];
  title: Scalars['String'];
};

export type IImage = {
  __typename?: 'Image';
  board: IBoard;
  id: Scalars['String'];
  url: Scalars['String'];
};

export type IInquiry = {
  __typename?: 'Inquiry';
  board: IBoard;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  user: IUser;
};

export type IInquiryAnswer = {
  __typename?: 'InquiryAnswer';
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  inquiry: IInquiry;
};

export type IInterest = {
  __typename?: 'Interest';
  board: IBoard;
  id: Scalars['String'];
  user: IUser;
};

export type ILocation = {
  __typename?: 'Location';
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  id: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type ILocationInput = {
  address: Scalars['String'];
  addressDetail: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type IMutation = {
  __typename?: 'Mutation';
  addInterestList: IInterest;
  adoptRunner: IRunner;
  applyRunner: IRunner;
  cancelPayment: IPayment;
  chargePayment: IPayment;
  createBoard: IBoard;
  createCategory: ICategory;
  createEvent: IEvent;
  createInquiry: IInquiry;
  createInquiryAnswer: IInquiryAnswer;
  createUser: IUser;
  deleteBoard: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['Boolean'];
  restoreAccessToken: Scalars['String'];
  updateBoard: IBoard;
  updateLoginUser: IUser;
};


export type IMutationAddInterestListArgs = {
  boardId: Scalars['String'];
};


export type IMutationAdoptRunnerArgs = {
  boardId: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationApplyRunnerArgs = {
  boardId: Scalars['String'];
};


export type IMutationCancelPaymentArgs = {
  amount: Scalars['Float'];
  impUid: Scalars['String'];
};


export type IMutationChargePaymentArgs = {
  amount: Scalars['Int'];
  impUid: Scalars['String'];
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationCreateCategoryArgs = {
  name: Scalars['String'];
};


export type IMutationCreateEventArgs = {
  createEventInput: ICreateEventInput;
};


export type IMutationCreateInquiryArgs = {
  boardId: Scalars['String'];
  createInquiryInput: ICreateInquiryInput;
};


export type IMutationCreateInquiryAnswerArgs = {
  contents: Scalars['String'];
  inquiryId: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateLoginUserArgs = {
  updateUserInput: IUpdateUserInput;
};

export type IPayment = {
  __typename?: 'Payment';
  amount: Scalars['Int'];
  id: Scalars['String'];
  impUid: Scalars['String'];
  status: Scalars['String'];
  user: IUser;
};

export type IPaymentHistory = {
  __typename?: 'PaymentHistory';
  board: IBoard;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  status: Scalars['String'];
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchBoard: IBoard;
  fetchBoards: Array<IBoard>;
  fetchCategories: Array<ICategory>;
  fetchEvent: IEvent;
  fetchEvents: Array<Array<IEvent>>;
  fetchEventsByDate: Array<IEvent>;
  fetchInquiry: Array<IInquiry>;
  fetchLoginUser: IUser;
  fetchLoginUserInquiry: Array<IInquiry>;
  fetchLoginUserInquiryAnswer: Array<IInquiryAnswer>;
  fetchPaymentHistory: Array<IPaymentHistory>;
  fetchPaymentHistoryCount: Scalars['Int'];
  fetchPayments: Scalars['Int'];
  fetchPointChargeHistory: Array<IPayment>;
  fetchRunnerByBoard: Array<IUser>;
  fetchUsers: Array<IUser>;
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchBoardsArgs = {
  dateType: Scalars['String'];
};


export type IQueryFetchEventArgs = {
  eventId: Scalars['String'];
};


export type IQueryFetchEventsByDateArgs = {
  date: Scalars['DateTime'];
};


export type IQueryFetchLoginUserInquiryAnswerArgs = {
  inquiryId: Scalars['String'];
};


export type IQueryFetchRunnerByBoardArgs = {
  boardId: Scalars['String'];
};

export type IRunner = {
  __typename?: 'Runner';
  board: IBoard;
  id: Scalars['String'];
  isChecked: Scalars['Boolean'];
  user: IUser;
};

export enum IUser_Logintype_Enum {
  Basic = 'BASIC',
  Google = 'GOOGLE',
  Kakao = 'KAKAO',
  Naver = 'NAVER'
}

export type IUpdateUserInput = {
  bankAccount?: InputMaybe<IBankAccountInput>;
  email?: InputMaybe<Scalars['String']>;
  nickName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  profileImg?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  bankAccount: IBankAccount;
  createdAt: Scalars['DateTime'];
  deleteAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  loginType: IUser_Logintype_Enum;
  nickName: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  point: Scalars['Int'];
  profileImg: Scalars['String'];
  rating: Scalars['Float'];
  report: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type IUpdateBoardInput = {
  category?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  image?: InputMaybe<Array<Scalars['String']>>;
  location?: InputMaybe<ILocationInput>;
  price?: InputMaybe<Scalars['Int']>;
  storeName?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};
