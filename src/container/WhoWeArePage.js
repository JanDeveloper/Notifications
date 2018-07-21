import WhoWeArePage from "../component/view/whowearePage/WhoWeArePage";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {fetchDataFromBackend, DATA} from "./../services/users";

const mapStateToProps = (state) => {
    return {
        [DATA]: state.users[DATA]
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return bindActionCreators({fetchDataFromBackend}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WhoWeArePage);
