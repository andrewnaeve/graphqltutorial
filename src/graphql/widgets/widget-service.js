import { v4 as keygen } from 'uuid';

function WidgetService({ dynamodb }) {
  async function getWidget({ widgetId, widgetTableName }) {
    const params = {
      TableName: widgetTableName,
      Key: {
        widget_id: widgetId
      }
    };

    const { Item } = await dynamodb.get(params).promise();

    return Item;
  }

  async function saveWidget({ widget, widgetTableName }) {
    console.log({ widget });

    const params = {
      TableName: widgetTableName,
      Item: {
        widget_id: keygen(),
        ...widget
      }
    };
    try {
      await dynamodb.put(params).promise();
    } catch (error) {
      return {
        success: false
      };
    }
    return {
      success: true
    };
  }

  return {
    getWidget,
    saveWidget
  };
}

export default WidgetService;
