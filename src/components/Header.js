import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user=useSelector(store=>store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // Route to error page
      });
  };

  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email,displayName,photoURL } = user;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL:photoURL }));
        } else {
          dispatch(removeUser());
        }
      });
    }, []);

  return (
    <div className="absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (<div className="flex p-4">
        <div className="flex-col">
        <img
          className="w-12 h-12 rounded-full"
          src={user?.photoURL}
          alt="user-icon"
        />
        <p className="text-red-500 font-bold">{user?.displayName ? user.displayName:"Guest"}</p>
        </div>
        <button
          onClick={handleSignOut}
          className="font-bold p-2 text-white hover:underline"
        >
          Sign Out
        </button>
      </div>)}
      
    </div>
  );
};

export default Header;
