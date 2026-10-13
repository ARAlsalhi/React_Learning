import TagButton from "./TagButton";

export default function SideMenu() {
  const cats = [
    {
      id: 1,
      title: "اخر المقالات",
      child: (
        <div>
          <span> 😊😊😊</span>
        </div>
      ),
    },

    {
      id: 2,
      title: "اخر المشاهدات",
      child: (
        <div>
          <img
            alt=" "
            style={{ width: "100px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYZCuxqoyhgSvFfCpL0h38fxzjotHhUsegAUoSTaNTg&s=10"
          />
        </div>
      ),
    },

    {
      id: 3,
      title: "اخر الاحداث",
      child: (
        <div>
          <span>👍👍</span>
        </div>
      ),
    },
  ];

  const catList = cats.map((cat) => {
    return (
      /*here we do render that mean i display this function on the site */
      <TagButton key={cat.id} title={cat.title}>
        {cat.child}
      </TagButton>
    );
  });

  return (
    <div style={{ border: "5px solid red", margin: "25px", padding: "10px" }}>
      {catList}
    </div>
  );
}
