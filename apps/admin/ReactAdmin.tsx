import { Admin, Resource } from "react-admin";
import { PostCreate, PostEdit, PostList } from "./resources/Post";
import { TagCreate, TagList } from "./resources/Tag";
import { UserCreate, UserEdit, UserList, UserShow } from "./resources/User";
import { AdminCreate, AdminList, AdminShow } from "./resources/Admin";
import { useSession } from "next-auth/react";
import { authProvider } from "./providers/authProvider";
import { dataProvider } from "./providers/dataProvider";
import LoginPage from "./custom-pages/LoginPage";
import { ScriptList } from "./resources/Script";
import {
  CategoryList,
  CategoryCreate,
  CategoryEdit,
} from "./resources/Category";
import { LogList } from "./resources/Log";
import { ProcessCreate, ProcessList } from "./resources/Process";

const ReactAdmin = () => {
  const { data: session, status } = useSession();
  if (status === "loading") return <p>loading</p>;

  return (
    <Admin
      authProvider={authProvider(session)}
      dataProvider={dataProvider}
      disableTelemetry
      loginPage={LoginPage}
    >
      <Resource
        name="user"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
        show={UserShow}
      />
      <Resource
        name="post"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource name="tag" list={TagList} create={TagCreate} />
      <Resource name="admin" list={AdminList} create={AdminCreate} />
      <Resource
        name="admin"
        list={AdminList}
        create={AdminCreate}
        show={AdminShow}
      />
      <Resource
        name="category"
        list={CategoryList}
        create={CategoryCreate}
        edit={CategoryEdit}
      />
      <Resource name="log" list={LogList} />
      <Resource name="script" list={ScriptList} />
      <Resource name="process" list={ProcessList} create={ProcessCreate} />
    </Admin>
  );
};

export default ReactAdmin;
