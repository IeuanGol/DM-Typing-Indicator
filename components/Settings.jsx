const { React } = require('powercord/webpack');
const { SwitchItem, RadioGroup } = require('powercord/components/settings')

module.exports = class Component extends React.Component {
  render() {
    const { getSetting, toggleSetting, updateSetting } = this.props;

    return <>
      <RadioGroup
        options={[
          { name: "Icon: Show just an icon.", value: "icon" },
          { name: "Text: Show just text.", value: "text" },
          { name: "Both: Show both an icon and text.", value: "both" }
        ]}
        value={getSetting("indicatorStyle", "icon")}
        onChange={(e) => updateSetting("indicatorStyle", e.value)}
      >Indicator Style</RadioGroup>
      <SwitchItem
        note="Don't show indicator for users who are blocked."
        value={getSetting('ignoreBlocked', true)}
        onChange={() => toggleSetting('ignoreBlocked')}
      >Ignore Blocked Users</SwitchItem>
      <SwitchItem
        note="Don't show indicator for users who are you are not friends with."
        value={getSetting('ignoreNonFriend', true)}
        onChange={() => toggleSetting('ignoreNonFriend')}
      >Ignore Non-Friend Users</SwitchItem>
    </>
  }
}