export interface RootState {
  navbar: {
    filterState: {
      isRegional: boolean;
      isNational: boolean;
      isInternational: boolean;
    };
    viewMembers: boolean;
    darkMode: boolean;
    
  };
  blog: {
    editable: boolean;
    blogData: Array<Blog>;
    currentBlog: Blog;
    newBlog: boolean;
    showLoader: boolean;
  };
  member: {
    membersData: Array<Member>;
  };
  modal : {
    toggleWarningModal: boolean;
  }
}
export interface ButtonProps {
  label: string;
  id?: string;
  onClick: Function;
  purpleButton?: boolean;
  cyanButton?: boolean;
  transparentButton?: boolean;
  purpleButtonBig?: boolean;
}

export interface BlogProps {
  title: string;
  tag: string;
  description: string;
  type: string;
  isSelected?: boolean;
}

export interface Blog {
  title: string;
  photo: string;
  details: string;
  type: string;
}

export interface Member {
  id: number;
  name: string;
  usernames: string;
  email: string;
  photo: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zip: string;
    geo: {
      lng: string;
      lat: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    location: string;
  };
}

export interface InputProps {
  value: string;
  onChange: Function;
  placeholder: string;
  type: string;
  blogTitle?: boolean;
  blogDetail?: boolean;
  search?: boolean;
}
