import WidgetService from './widget-service';

const widgetResolvers = ({ dynamodb }) => {
  const service = WidgetService({ dynamodb });
  return {
    Query: {
      getWidget: (_, id, context) => service.listWidgets({ id, ...context })
    },
    Mutation: {
      saveWidget: (_, widget, context) =>
        service.saveWidget({ widget, ...context })
    }
  };
};

export default widgetResolvers;
