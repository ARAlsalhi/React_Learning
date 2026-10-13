import "./TagButtonStyle.css";

export default function TagButton({ title, children = "add somthing" }) {
  return (
    /*هذا يشيك اذا الشرط صحيح يطبق الي قبل : واذا لا خطا يكمل ويطبق الكو الي بعد : */

    <div>
      {title == null || title === "" ? (
        <div></div>
      ) : (
        <button className="tagbutton">
          {title}
          {children}
        </button>
      )}
    </div>
  );
}
