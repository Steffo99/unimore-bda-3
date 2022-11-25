
Charts.Load().then(function() {
    let tooltip = {"valueDecimals":2,"valuePrefix":"","valueSuffix":"\u20ac"};
    let max = 29.99;

    let chartOverview = (function() {
        let setup = (new Charts.Gallery.History.Price())
        .setTitle("Price (EUR)");

        return (new Charts.Builder(setup, [{"zIndex":4,"name":"Best Price","data":[[1608884472000,16.79],[1613066666000,16.79],[1613069933000,13.43],[1613239833000,13.43],[1613240474000,16.79],[1624899924000,16.79],[1624901288000,13.43],[1625771329000,13.43],[1625773191000,16.79],[1640193725000,16.79],[1640204687000,13.43],[1641413536000,13.43],[1641415776000,16.79],[1643311393000,16.79],[1643313907000,13.43],[1643918831000,13.43],[1643919056000,16.79],[1647090960000,12.59],[1647277491000,12.59],[1647883146000,null],[1647883919000,16.79],[1655690677000,16.79],[1656019339000,16.79],[1656021998000,10.07],[1657221607000,10.07],[1657222825000,16.79],[1666718801000,16.79],[1666719344000,12.59],[1667323234000,12.59],[1667323472000,16.79],[1669136966000,16.79],[1669146862000,12.59],[1669753174000,12.59],[1669753347000,16.79],[1671747365000,16.79],[1671748197000,11.75],[1672953591000,11.75],[1672956954000,16.79],[1678987377000,16.79],[1678989333000,12.59],[1679599168000,12.59],[1679601207000,16.79],[1688044215000,16.79],[1688044823000,29.99]],"step":true,"color":"#90ee7e"},{"zIndex":2,"name":"Best Regular Price","data":[[1608884472000,16.79],[1613066666000,16.79],[1613069933000,16.79],[1613239833000,16.79],[1613240474000,16.79],[1624899924000,16.79],[1624901288000,16.79],[1625771329000,16.79],[1625773191000,16.79],[1640193725000,16.79],[1640204687000,16.79],[1641413536000,16.79],[1641415776000,16.79],[1643311393000,16.79],[1643313907000,16.79],[1643918831000,16.79],[1643919056000,16.79],[1647090960000,16.79],[1647277491000,16.79],[1647883146000,null],[1647883919000,16.79],[1655690677000,16.79],[1656019339000,16.79],[1656021998000,16.79],[1657221607000,16.79],[1657222825000,16.79],[1666718801000,16.79],[1666719344000,16.79],[1667323234000,16.79],[1667323472000,16.79],[1669136966000,16.79],[1669146862000,16.79],[1669753174000,16.79],[1669753347000,16.79],[1671747365000,16.79],[1671748197000,16.79],[1672953591000,16.79],[1672956954000,16.79],[1678987377000,16.79],[1678989333000,16.79],[1679599168000,16.79],[1679601207000,16.79],[1688044215000,16.79],[1688044823000,29.99]],"step":true,"color":"#2b908f"},{"zIndex":1,"name":"Worst Regular Price","data":[[1608884472000,16.79],[1613066666000,16.79],[1613069933000,16.79],[1613239833000,16.79],[1613240474000,16.79],[1624899924000,16.79],[1624901288000,16.79],[1625771329000,16.79],[1625773191000,16.79],[1640193725000,16.79],[1640204687000,16.79],[1641413536000,16.79],[1641415776000,16.79],[1643311393000,16.79],[1643313907000,16.79],[1643918831000,16.79],[1643919056000,16.79],[1647090960000,16.79],[1647277491000,16.79],[1647883146000,null],[1647883919000,16.79],[1655690677000,29.99],[1656019339000,29.99],[1656021998000,29.99],[1657221607000,29.99],[1657222825000,29.99],[1666718801000,29.99],[1666719344000,29.99],[1667323234000,29.99],[1667323472000,29.99],[1669136966000,29.99],[1669146862000,29.99],[1669753174000,29.99],[1669753347000,29.99],[1671747365000,29.99],[1671748197000,29.99],[1672953591000,29.99],[1672956954000,29.99],[1678987377000,29.99],[1678989333000,29.99],[1679599168000,29.99],[1679601207000,29.99],[1688044215000,29.99],[1688044823000,29.99]],"step":true,"color":"#f04848","visible":false},{"zIndex":3,"type":"area","name":"Historical Low","data":[[1608884472000,16.79],[1613069933000,13.43],[1647090960000,12.59],[1656021998000,10.07],[1688044843000,10.07]],"step":true,"color":"#ffb726","lineWidth":1.5,"fillOpacity":0.1}]))
        .setTooltip(tooltip)
        .setDefaultValueRange(0, max)
        .enableLegend()
        .enableRangeSelector();
    })();

    let chartDetail = (function(){
        let setup = (new Charts.Gallery.History.Price())
        .useThinLine()
        .setTooltipDealFormat()
        .setTitle("Price (EUR)");

        return (new Charts.Builder(setup, [{"name":"Steam","data":[[1608884472000,16.79],[1613066666000,16.79],[1613069933000,13.43],[1613239833000,13.43],[1613240474000,16.79],[1624899924000,16.79],[1624901288000,13.43],[1625771329000,13.43],[1625773191000,16.79],[1640193725000,16.79],[1640204687000,13.43],[1641413536000,13.43],[1641415776000,16.79],[1643311393000,16.79],[1643313907000,13.43],[1643918831000,13.43],[1643919056000,16.79],[1647090960000,12.59],[1647277491000,12.59],[1647883146000,null],[1647883919000,16.79],[1655690677000,16.79],[1656019339000,16.79],[1656021998000,10.07],[1657221607000,10.07],[1657222825000,16.79],[1666718801000,16.79],[1666719344000,12.59],[1667323234000,12.59],[1667323472000,16.79],[1669136966000,16.79],[1669146862000,12.59],[1669753174000,12.59],[1669753347000,16.79],[1671747365000,16.79],[1671748197000,11.75],[1672953591000,11.75],[1672956954000,16.79],[1678987377000,16.79],[1678989333000,12.59],[1679599168000,12.59],[1679601207000,16.79],[1688044215000,16.79],[1688044823000,null]],"step":true},{"name":"Microsoft Store","data":[[1655690677000,29.99],[1656019339000,29.99],[1656021998000,29.99],[1657221607000,29.99],[1657222825000,29.99],[1666718801000,29.99],[1666719344000,29.99],[1667323234000,29.99],[1667323472000,29.99],[1669136966000,29.99],[1669146862000,29.99],[1669753174000,29.99],[1669753347000,29.99],[1671747365000,29.99],[1671748197000,29.99],[1672953591000,29.99],[1672956954000,29.99],[1678987377000,29.99],[1678989333000,29.99],[1679599168000,29.99],[1679601207000,29.99],[1688044215000,29.99],[1688044823000,29.99]],"step":true}]))
        .setTooltip(tooltip)
        .setDefaultValueRange(0, max)
        .enableRangeSelector();
    })();

    (new Charts.Tabs("cp", "chart-price"))
    .add("overview", chartOverview)
    .add("detail", chartDetail)
    .load();
});
