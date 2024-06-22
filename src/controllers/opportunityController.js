import Opportunity from "../models/Opportunity.js";

export const getOpportunities = async (req, res) => {
  const { page = 1, limit = 20, ...filters } = req.query;

  try {
    const query = {};
    Object.keys(filters).forEach((key) => {
      query[key] = { $regex: filters[key], $options: "i" };
    });

    const opportunities = await Opportunity.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Opportunity.countDocuments(query);

    res.status(200).json({ opportunities, total });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const applyOpportunity = async (req, res) => {
  const { id } = req.params;
  const userId = req.user;

  try {
    const opportunity = await Opportunity.findById(id);

    if (!opportunity) {
      return res.status(404).json({ message: "Opportunity not found" });
    }

    opportunity.applicants.push(userId);
    await opportunity.save();

    res.status(200).json({ message: "Successfully applied to opportunity" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
