var React = require("react");
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;
var mui = require("material-ui");

var Inbox = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Discussions</h1>
        <span>Some material-ui tests</span>
        <br/>
        <mui.FlatButton label="Default" />
        <mui.Icon icon="action-home" />
        <RouteHandler />

        <form>
          <mui.Checkbox name="checkboxName" value="checkboxValue1" />
          <mui.Checkbox name="checkboxName" value="checkboxValue2" />
          <mui.Checkbox name="checkboxName" value="checkboxValue3" />
        </form>
        <mui.Toggle />
      </div>
    );
  }
});

module.exports = Inbox;
