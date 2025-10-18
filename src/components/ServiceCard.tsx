import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { LucideIcon } from "lucide-react";
import { MessageCircle, Facebook } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  pricing?: { item: string; price: string }[];
}

const ServiceCard = ({ icon: Icon, title, description, pricing }: ServiceCardProps) => {
  const [open, setOpen] = useState(false);

  const defaultPricing = [
    { item: "Standard Service", price: "Rs. XXX" },
    { item: "Premium Service", price: "Rs. XXX" }
  ];

  const displayPricing = pricing || defaultPricing;

  return (
    <>
      <Card 
        onClick={() => setOpen(true)}
        className="p-6 bg-card border-border hover:border-primary transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_0_30px_hsl(16_100%_50%_/_0.3)] cursor-pointer"
      >
        <Icon className="w-12 h-12 text-primary mb-4 group-hover:animate-float" />
        <h3 className="font-poppins font-semibold text-xl mb-2 text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-background border-2 border-primary/50 shadow-[0_0_40px_hsl(16_100%_50%_/_0.3)] max-w-md">
          <DialogHeader>
            <DialogTitle className="font-poppins text-3xl text-center mb-6">
              <span className="bg-gradient-fire bg-clip-text text-transparent">{title}</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Pricing Section */}
            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <h4 className="font-poppins font-semibold text-lg mb-3 text-foreground">Pricing</h4>
              <div className="space-y-2">
                {displayPricing.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <span className="text-muted-foreground">{item.item}</span>
                    <span className="font-semibold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic text-center">
                Contact us for complex projects and custom pricing
              </p>
            </div>

            {/* Social Links Section */}
            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <h4 className="font-poppins font-semibold text-lg mb-3 text-foreground">Message us on:</h4>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://wa.me/94725451111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-primary/10 transition-colors group border border-border hover:border-primary"
                >
                  <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-foreground font-medium">WhatsApp</span>
                </a>
                
                <a 
                  href="https://www.facebook.com/agnienterprise/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-primary/10 transition-colors group border border-border hover:border-primary"
                >
                  <div className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-foreground font-medium">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServiceCard;
