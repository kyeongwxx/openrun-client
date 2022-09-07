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
  category: ICategory;
  chatRoom: IChatRoom;
  contents?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  dueDate?: Maybe<Scalars['DateTime']>;
  eventDay?: Maybe<Scalars['String']>;
  eventTime?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image: Array<IImage>;
  location: ILocation;
  price?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
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
  room: Scalars['String'];
  user: IUser;
};

export type IChatRoom = {
  __typename?: 'ChatRoom';
  board: IBoard;
  id: Scalars['String'];
  room: Scalars['String'];
  runner: IUser;
  seller: IUser;
};

export type ICreateBoardInput = {
  category?: InputMaybe<Scalars['String']>;
  contents?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  eventDay?: InputMaybe<Scalars['DateTime']>;
  eventTime?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Array<Scalars['String']>>;
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
  board: IBoard;
  id: Scalars['String'];
  url?: Maybe<Scalars['String']>;
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
  zipcode: Scalars['String'];
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
  createRating: Scalars['Boolean'];
  createReport: IReport;
  createRoom: IChatRoom;
  createUser: IUser;
  deleteBoard: Scalars['Boolean'];
  deleteLoginUser: Scalars['Boolean'];
  deleteReport: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['Boolean'];
  restoreAccessToken: Scalars['String'];
  updateBoard: IBoard;
  updateLoginUser: IUser;
  uploadFile: Scalars['String'];
  uploadFiles: Array<Scalars['String']>;
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


export type IMutationCreateRatingArgs = {
  boardId: Scalars['String'];
  rate: Scalars['Float'];
};


export type IMutationCreateReportArgs = {
  createReportInput: ICreateReportInput;
};


export type IMutationCreateRoomArgs = {
  boardId: Scalars['String'];
  userEmail: Scalars['String'];
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


export type IMutationUploadFilesArgs = {
  files: Array<Scalars['Upload']>;
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
  connectionRoom: IChatRoom;
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
  fetchLogs: Array<IChatMessage>;
  fetchPaymentHistory: Array<IPaymentHistory>;
  fetchPaymentHistoryCount: Scalars['Int'];
  fetchPayments: Scalars['Int'];
  fetchPointChargeHistory: Array<IPayment>;
  fetchReports: Array<IReport>;
  fetchRunnerByBoard: Array<IUser>;
  fetchUsers: Array<IUser>;
};


export type IQueryConnectionRoomArgs = {
  userEmail: Scalars['String'];
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


export type IQueryFetchEventsArgs = {
  search?: InputMaybe<Scalars['String']>;
};


export type IQueryFetchEventsByDateArgs = {
  date: Scalars['DateTime'];
};


export type IQueryFetchLoginUserInquiryAnswerArgs = {
  inquiryId: Scalars['String'];
};


export type IQueryFetchLogsArgs = {
  room: Scalars['String'];
};


export type IQueryFetchRunnerByBoardArgs = {
  boardId: Scalars['String'];
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
  eventDay?: InputMaybe<Scalars['DateTime']>;
  eventTime?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Array<Scalars['String']>>;
  location?: InputMaybe<ILocationInput>;
  price?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};
