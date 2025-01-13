export interface ISetting {
  content: ISettingContent;
  projects: IProject[];
  cases: ICase[];
  faqs: IFaq[];
}

export interface ISettingContent {
  email: string;
  privacy_policy: string;
  counter: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image: string;
  period: string;
  tags: string[];
  status: number;
  created_at: string;
  updated_at: string;
}

export interface ICase {
  id: number;
  author: string;
  job: string,
  description: string;
  likes: number;
  status: number;
  created_at: string;
  updated_at: string;
}

export interface IFaq {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}
