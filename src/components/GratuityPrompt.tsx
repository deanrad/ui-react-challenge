export const GratuityPrompt = ({ hasGratuity = false }) => {
  return (
    <div>
      {hasGratuity
        ? "Thank you for your generosity!"
        : "Please consider a gratuity."}
    </div>
  );
};
