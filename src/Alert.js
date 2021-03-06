import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
 const Alert = ({alerts}) => alerts!=null && alerts.length>0 && alerts.map(alerts=>(
     <div key={alert.id} className={`alert alert-${alert.alertType}`}
     >{alerts.msg}</div>
 ));
Alert.PropTypes={
 alerts:PropTypes.array.isRequired
}
const mapStatesToProps=(state)=>({
alerts:state.alert
});
export default connect(mapStatesToProps)(Alert);