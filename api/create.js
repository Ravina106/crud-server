import User from "../model/userModel.js";
export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const user = await User.create(req.body);
      res.status(201).json({ success: true, data: user });
    } catch (err) {
      res.status(400).json({ success: false, error: err.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}