import User from "../model/userModel.js";
export default async function handler(req, res) {
  await dbConnect();

  const { id } = req.query;

  if (req.method === "PUT") {
    try {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!updatedUser) return res.status(404).json({ success: false, message: "User not found" });

      res.status(200).json({ success: true, data: updatedUser });
    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}