import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

function App() {
  const posts = [
    {
      id: 1,
      postName: "HIIIIII",
      postBody: "Learing course",
    },
    {
      id: 2,
      postName: "GG",
      postBody: "Learing course2",
    },
    {
      id: 3,
      postName: "GG",
      postBody: "",
    },
    {
      id: 4,
      postName: "GGHGHGHGH",
      postBody: "",
    },
  ];

  /*هذه مفوفه تدور على posts*/

  const postsList = posts.map((post) => {
    return <Post key={post.id} postName={post.postName} />;
  });

  return (
    <div className="App">
      <Header />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Post and side menu*/}
        <div style={{ display: "flex", width: "60%" }}>
          {/* Post container */}
          <div style={{ width: "70%" }}>{postsList}</div>
          {/* Post container */}

          {/* Side menu container */}
          <div style={{ width: "30%", marginTop: "10px" }}>
            <AppSideMenu />
          </div>
        </div>
        {/* Post and side menu*/}
      </div>
    </div>
  );
}

/*this function check what is the part should be apper*/
function AppSideMenu() {
  return <SideMenu />;
}
export default App;
