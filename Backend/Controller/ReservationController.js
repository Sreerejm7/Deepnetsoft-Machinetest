const Reservation = require("../Model/Reservation");

const addreservation = async (req, res) => {
  const { name, email, number, date_and_time } = req.body;
  if (!name || !email || !number || !date_and_time) {
    return res.status(400).json({ message: "Please fill All Fields" });
  }
  try {
    const reservation = await Reservation.create(req.body);
    if (reservation) {
      return res
        .status(200)
        .json({ message: "Your Seat Reserved Sucessfully", reservation });
    }
  } catch (error) {
    return res.status(400).json({ message: "error while booking reservation" });
  }
};

const fetchreservation = async (req, res) => {
  try {
    const reservation = await Reservation.find({});
    if (!reservation) {
      return res.status(400).json({ message: "No Reservations" });
    } else {
      return res
        .status(200)
        .json({ message: "Reservations Fetched Sucessfully.", reservation });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error while Fetching Reservations" });
  }
};

const deletereservation = async (req,res)=>{
  const {id} = req.params
  try {
    const reservation = await Reservation.findByIdAndDelete(id)
    if(!reservation){
      return res.status(400).json({ message: "Reservation Not Found" });
    }
    else{
      return res.status(200).json({ message: "Reservation Cancelled Sucessfully" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Rerror while updating reservation" });
  }
}


module.exports = {
  addreservation,
  fetchreservation,
  deletereservation
};
