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
  Upload: any;
};

export type IBankAccount = {
  __typename?: 'BankAccount';
  bankAccountNum: Scalars['String'];
  company: Scalars['String'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
};

export type IBankAccountInput = {
  backAccountNum?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
};

export type IBoard = {
  __typename?: 'Board';
  category?: Maybe<ICategory>;
  chatRoom?: Maybe<IChatRoom>;
  contents?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  image?: Maybe<IImage>;
  location?: Maybe<ILocation>;
  price?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<IUser>;
};

export type ICategory = {
  __typename?: 'Category';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type IChatMessage = {
  __typename?: 'ChatMessage';
  createdAt: Scalars['DateTime'];
  message: Scalars['String'];
  room: IChatRoom;
  user: IUser;
};

export type IChatRoom = {
  __typename?: 'ChatRoom';
  board: IBoard;
  room: Scalars['String'];
  runner: IUser;
  seller: IUser;
};

export type ICreateAdminInput = {
  email?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  nickName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  point?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Float']>;
  report?: InputMaybe<Scalars['Int']>;
  successRate?: InputMaybe<Scalars['Int']>;
};

export type ICreateBoardInput = {
  category?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  eventDay?: InputMaybe<Scalars['String']>;
  eventTime?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<ILocationInput>;
  price?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type ICreateEventInput = {
  contents?: InputMaybe<Scalars['String']>;
  fakeData?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  period?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
};

export type ICreateInquiryInput = {
  contents?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ICreateReportInput = {
  boardId?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<IReport_Type_Enum>;
};

export type ICreateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  nickName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
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
  id: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type IInquiry = {
  __typename?: 'Inquiry';
  board?: Maybe<IBoard>;
  contents?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<IUser>;
};

export type IInquiryAnswer = {
  __typename?: 'InquiryAnswer';
  contents?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  inquiry?: Maybe<IInquiry>;
};

export type IInterest = {
  __typename?: 'Interest';
  board: IBoard;
  id: Scalars['String'];
  user: IUser;
};

export type ILocation = {
  __typename?: 'Location';
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type ILocationInput = {
  address?: InputMaybe<Scalars['String']>;
  addressDetail?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

export type IMutation = {
  __typename?: 'Mutation';
  addInterestList: Scalars['Boolean'];
  adoptRunner: IRunner;
  applyRunner: IRunner;
  cancelPayment: IPayment;
  chargePayment: IPayment;
  checkTokenByPhone: Scalars['Boolean'];
  completeBusiness: IBoard;
  createAdmin: IUser;
  createBoard: IBoard;
  createCategory: ICategory;
  createEvent: IEvent;
  createInquiry: IInquiry;
  createInquiryAnswer: IInquiryAnswer;
  createRating: Scalars['Boolean'];
  createReport: IReport;
  createUser: IUser;
  deleteBoard: Scalars['Boolean'];
  deleteLoginUser: Scalars['Boolean'];
  deleteReport: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['Boolean'];
  restoreAccessToken: Scalars['String'];
  sendTokenToPhone: Scalars['String'];
  test: IPaymentHistory;
  updateBoard: IBoard;
  updateLoginUser: IUser;
  updateNotifications: Scalars['Boolean'];
  uploadFile: Scalars['String'];
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


export type IMutationCheckTokenByPhoneArgs = {
  phone: Scalars['String'];
  token: Scalars['String'];
};


export type IMutationCompleteBusinessArgs = {
  boardId: Scalars['String'];
};


export type IMutationCreateAdminArgs = {
  createAdminInput: ICreateAdminInput;
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


export type IMutationCreateRatingArgs = {
  boardId: Scalars['String'];
  rate: Scalars['Float'];
};


export type IMutationCreateReportArgs = {
  createReportInput: ICreateReportInput;
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteBoardArgs = {
  boardId: Scalars['String'];
};


export type IMutationDeleteReportArgs = {
  reportId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationSendTokenToPhoneArgs = {
  phone: Scalars['String'];
};


export type IMutationTestArgs = {
  boardId: Scalars['String'];
};


export type IMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
};


export type IMutationUpdateLoginUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadFileArgs = {
  file: Scalars['Upload'];
};

export type INotification = {
  __typename?: 'Notification';
  board?: Maybe<IBoard>;
  contents?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isNew?: Maybe<Scalars['Boolean']>;
  user?: Maybe<IUser>;
};

export type IPayment = {
  __typename?: 'Payment';
  amount?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  impUid: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  user?: Maybe<IUser>;
};

export type IPaymentByDate = {
  __typename?: 'PaymentByDate';
  amount?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
};

export type IPaymentHistory = {
  __typename?: 'PaymentHistory';
  board: IBoard;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  price: Scalars['Int'];
  status: Scalars['String'];
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchAdmin: Array<IUser>;
  fetchBestOfUser: Array<IUser>;
  fetchBoard: IBoard;
  fetchBoards: Array<IBoard>;
  fetchCategories: Array<ICategory>;
  fetchChatLogs: Array<IChatMessage>;
  fetchEvent: IEvent;
  fetchEventsByDate: Array<IEvent>;
  fetchInquiry: Array<IInquiry>;
  fetchInterestBoardId: Array<Scalars['String']>;
  fetchInterestBoards: Array<IInterest>;
  fetchLoginUser: IUser;
  fetchLoginUserInquiry: Array<IInquiry>;
  fetchLoginUserInquiryAnswer: Array<IInquiryAnswer>;
  fetchNotifications: Array<INotification>;
  fetchPaymentHistory: Array<IPaymentHistory>;
  fetchPaymentHistoryCount: Scalars['Int'];
  fetchPayments: Array<IPaymentByDate>;
  fetchPointChargeHistory: Array<IPayment>;
  fetchReports: Array<IReport>;
  fetchRunnerByBoard: Array<IRunner>;
  fetchUserChatRoom: Array<IChatRoom>;
  fetchUsers: Array<IUser>;
  fetchUsersCount: Scalars['Int'];
  fetchUsersCountByDate: Array<IUser>;
  fetchWriteBoards: Array<IBoard>;
};


export type IQueryFetchBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchBoardsArgs = {
  dateType: Scalars['String'];
  direcion?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchChatLogsArgs = {
  room: Scalars['String'];
};


export type IQueryFetchEventArgs = {
  eventId: Scalars['String'];
};


export type IQueryFetchEventsByDateArgs = {
  date: Scalars['DateTime'];
};


export type IQueryFetchInterestBoardsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchLoginUserInquiryAnswerArgs = {
  inquiryId: Scalars['String'];
};


export type IQueryFetchPaymentHistoryArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchPointChargeHistoryArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchRunnerByBoardArgs = {
  boardId: Scalars['String'];
};


export type IQueryFetchWriteBoardsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};

export enum IReport_Type_Enum {
  Adv = 'ADV',
  Etc = 'ETC',
  MissionFailed = 'MISSION_FAILED',
  TrashTalk = 'TRASH_TALK'
}

export type IReport = {
  __typename?: 'Report';
  board: IBoard;
  contents: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  type: IReport_Type_Enum;
  user: IUser;
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

export type IUpdateBoardInput = {
  category?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  eventDay?: InputMaybe<Scalars['String']>;
  eventTime?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<ILocationInput>;
  price?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

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
  bankAccount?: Maybe<IBankAccount>;
  boardTotal?: Maybe<Scalars['Int']>;
  countByDate?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deleteAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  inquiryTotal?: Maybe<Scalars['Int']>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  loginDate?: Maybe<Scalars['DateTime']>;
  loginType?: Maybe<IUser_Logintype_Enum>;
  nickName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  paymentTotal?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  point?: Maybe<Scalars['Int']>;
  profileImg?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  report?: Maybe<Scalars['Int']>;
  successRate?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};
