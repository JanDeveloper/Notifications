import {

} from "../services/users";
import HomePage from "../component/view/homePage/HomePage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = ( state ) => {
    return {

    };
};

const mapDispatchToProps = ( dispatch ) => {
    return bindActionCreators({  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
