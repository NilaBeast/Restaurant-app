import menuData from "../../data/menuData";
import MenuItem from "./MenuItem";

export default function MenuList() {
  if (!menuData || menuData.length === 0) {
    return <p>No menu items found</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {menuData.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}
