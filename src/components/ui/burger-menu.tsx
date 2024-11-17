import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BurgerMenu() {
    return (
        <Button
            variant="outline"
            size="icon"
            aria-label="Toggle menu"
        >
            <Menu className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle menu</span>
        </Button>
    );
}