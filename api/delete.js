import User from "../model/userModel.js";
export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;

  if (req.method === "DELETE") {
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) return res.status(404).json({ success: false, message: "User not found" });

      res.status(200).json({ success: true, data: deletedUser });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
