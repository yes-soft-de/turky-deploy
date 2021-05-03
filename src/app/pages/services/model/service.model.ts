export interface Service {
  id: string;
  commentsNumber?: number; 
  createdAt?: { timestamp: number };
  description?: string;
  image?:  string;
  reaction?: [{reactionCount: number; createdBy: Boolean; }];
  title?:  string;
  type?:  string;
  updatedAt?: { timestamp: number };
  userImage?:  string;
  userName?:  string;
  categoryName?:  string;
  comments?: [
    {
      id: number;
      image: string;
      userName: string;
      comment: string;
      createdAt: { timestamp: number };
      entity: string;
      itemID: number;
    }
  ];
}
