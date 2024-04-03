import { useSelector } from "react-redux";
import { RootState } from "../redux/stroe";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChildrenType } from "../Common/types";

const AuthProteced:React.FC<ChildrenType> = ({children}) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, [user]);
return children
};

export default AuthProteced;
