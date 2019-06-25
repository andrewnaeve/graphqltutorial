import { v4 as keygen } from 'uuid';

function WidgetService({ dynamodb }) {
  function getWidget({ id, widgetTableName }) {
    const params = {
      TableName: widgetTableName,
      Key: {
        HashKey: id
      }
    };
    return dynamodb.get(params);
  }

  async function saveWidget({ widget, widgetTableName }) {
    const params = {
      TableName: widgetTableName,
      Item: {
        widget_id: keygen(),
        ...widget
      }
    };
    try {
      dynamodb.put(params).promise();
    } catch (error) {
      return false;
    }
    return true;
  }

  return {
    getWidget,
    saveWidget
  };
}

export default WidgetService;
