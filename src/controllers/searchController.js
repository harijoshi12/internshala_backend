import Opportunity from "../models/Opportunity.js";

export const searchOpportunities = async (req, res) => {
  const { keyword, page = 1, limit = 20 } = req.query;

  try {
    const query = {
      $or: [
        { companyName: { $regex: keyword, $options: "i" } },
        { profileName: { $regex: keyword, $options: "i" } },
        { location: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
        // other fields as necessary
      ],
    };

    const opportunities = await Opportunity.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Opportunity.countDocuments(query);

    res.status(200).json({ opportunities, total });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
