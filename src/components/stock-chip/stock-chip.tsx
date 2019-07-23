import * as React from "react";
import Chip from "@material-ui/core/Chip";

interface StockChipProps {
    stockAmount: number;
}

const StockChip: React.FunctionComponent<StockChipProps> = ({ stockAmount }) => {
    if (stockAmount > 0) {
        return <Chip label="In Stock" className="stock-chip in-stock" />;
    }

    return <Chip label="Out of Stock" className="stock-chip" />;
};

export { StockChip };
