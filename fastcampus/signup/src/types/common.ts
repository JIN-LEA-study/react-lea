// 공통적으로 사용되는 타입 정리

export type AnyObject = {
  [key: string]: any;
};

export type ValidateRule = {
  rule: RegExp;
  match: boolean;
  message: string;
};
